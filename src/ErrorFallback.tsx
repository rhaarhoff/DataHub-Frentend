// src/ErrorFallback.tsx
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error, resetErrorBoundary: () => void }) => (
    <div role="alert">
      <h1>Something went wrong. Please try again later.</h1>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Retry</button>
    </div>
  );
  
  export default ErrorFallback;
  