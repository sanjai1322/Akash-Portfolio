import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculatePassRate,
  calculateDefectLeakage,
  filterLabProjects,
  formatPipelineDuration,
  getFormattedIST,
  type LabProject,
} from './telemetry.ts';

test('calculatePassRate calculates correct percentage with 2 decimals', () => {
  assert.equal(calculatePassRate(9984, 10000), 99.84);
  assert.equal(calculatePassRate(104, 104), 100);
  assert.equal(calculatePassRate(0, 0), 100);
  assert.equal(calculatePassRate(95, 100), 95);
});

test('calculateDefectLeakage calculates leakage correctly', () => {
  assert.equal(calculateDefectLeakage(0, 150), 0);
  assert.equal(calculateDefectLeakage(2, 100), 2);
  assert.equal(calculateDefectLeakage(0, 0), 0);
});

test('formatPipelineDuration formats ms to mm:ss correctly', () => {
  assert.equal(formatPipelineDuration(252000), '04m 12s');
  assert.equal(formatPipelineDuration(65000), '01m 05s');
  assert.equal(formatPipelineDuration(0), '00m 00s');
});

test('filterLabProjects filters properly by tech and query', () => {
  const dummyProjects: LabProject[] = [
    {
      id: 'p1',
      code: 'ARCH-01',
      title: 'selenium-framework',
      category: 'Java / TestNG',
      description: 'High-concurrency parallel Selenium WebDriver engine',
      detailedOverview: 'Detailed overview',
      techStack: ['Java', 'Selenium', 'TestNG'],
      metrics: { coverage: '94%', speed: '3x', tests: 150 },
      features: ['Parallel Execution'],
      cliSample: 'mvn clean test',
      githubUrl: 'https://github.com/akash-1024/selenium-framework',
    },
    {
      id: 'p2',
      code: 'ARCH-02',
      title: 'playwright-pytest-framework',
      category: 'Python / Playwright',
      description: 'Headless execution engine with async event loops',
      detailedOverview: 'Detailed overview',
      techStack: ['Python', 'Playwright', 'Pytest'],
      metrics: { coverage: '96%', speed: '5x', tests: 120 },
      features: ['Auto-waiting assertions'],
      cliSample: 'pytest -n auto',
      githubUrl: 'https://github.com/akash-1024/playwright-pytest-framework',
    },
  ];

  const javaFiltered = filterLabProjects(dummyProjects, '', 'Java');
  assert.equal(javaFiltered.length, 1);
  assert.equal(javaFiltered[0].id, 'p1');

  const queryFiltered = filterLabProjects(dummyProjects, 'pytest', null);
  assert.equal(queryFiltered.length, 1);
  assert.equal(queryFiltered[0].id, 'p2');

  const allFiltered = filterLabProjects(dummyProjects, '', 'ALL');
  assert.equal(allFiltered.length, 2);
});

test('getFormattedIST returns a string containing IST', () => {
  const ist = getFormattedIST(new Date('2026-10-17T12:00:00Z'));
  assert.ok(ist.includes('IST'));
});
