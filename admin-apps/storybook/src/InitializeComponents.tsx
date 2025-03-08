import type React from "react";
import { useEffect, useState } from "react";

function InitializeComponents({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    import("styler/loadStyle").then(() => setIsLoading(false));
  }, []);

  if (isLoading) return <>is Loading</>;
  return <>{children}</>;
}

export default InitializeComponents;
