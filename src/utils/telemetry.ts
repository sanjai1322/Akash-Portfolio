/**
 * Telemetry and QA calculation engine for test pipelines and lab filtering.
 */

export interface TestExecutionResult {
  id: string;
  timestamp: string;
  level: 'INIT' | 'EXEC' | 'DATA' | 'ASSERT' | 'COMPLETE';
  name: string;
  status: 'OK' | 'PASS' | 'ASSERT_TRUE' | 'HTTP_200' | 'WARN' | 'FAIL';
  durationMs: number;
  threadId: number;
  details?: string;
}

export interface SuiteMetrics {
  totalTests: number;
  passedTests: number;
  failedTests: number;
  flakedTests: number;
  passRate: number;
  defectLeakageRate: number;
  totalDurationMs: number;
  concurrencyWorkers: number;
}

export interface LabProject {
  id: string;
  code: string;
  title: string;
  category: string;
  description: string;
  detailedOverview: string;
  techStack: string[];
  metrics: {
    coverage: string;
    speed: string;
    stars?: number;
    tests: number;
  };
  features: string[];
  cliSample: string;
  githubUrl: string;
  architectureDiagram?: string;
}

/**
 * Calculates pass rate percentage cleanly rounded to two decimal places
 */
export function calculatePassRate(passed: number, total: number): number {
  if (total <= 0) return 100.0;
  const rate = (passed / total) * 100;
  return Math.round(rate * 100) / 100;
}

/**
 * Calculates defect leakage percentage
 */
export function calculateDefectLeakage(productionDefects: number, totalDefectsFound: number): number {
  if (totalDefectsFound <= 0) return 0.0;
  const rate = (productionDefects / totalDefectsFound) * 100;
  return Math.round(rate * 100) / 100;
}

/**
 * Filters lab projects by search query or tech tag
 */
export function filterLabProjects(
  projects: LabProject[],
  query: string,
  selectedTech: string | null
): LabProject[] {
  return projects.filter((project) => {
    const matchesTech = !selectedTech || selectedTech === 'ALL' || project.techStack.some(
      (tech) => tech.toLowerCase() === selectedTech.toLowerCase()
    );

    if (!matchesTech) return false;

    if (!query || query.trim() === '') return true;

    const q = query.toLowerCase().trim();
    return (
      project.title.toLowerCase().includes(q) ||
      project.description.toLowerCase().includes(q) ||
      project.code.toLowerCase().includes(q) ||
      project.techStack.some((tech) => tech.toLowerCase().includes(q))
    );
  });
}

/**
 * Formats duration in ms to clean readable mm:ss format
 */
export function formatPipelineDuration(durationMs: number): string {
  const totalSeconds = Math.floor(durationMs / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, '0')}m ${String(seconds).padStart(2, '0')}s`;
}

/**
 * Returns formatted Indian Standard Time (IST UTC+05:30) string
 */
export function getFormattedIST(date: Date = new Date()): string {
  return date.toLocaleTimeString('en-US', {
    timeZone: 'Asia/Kolkata',
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }) + ' IST';
}
