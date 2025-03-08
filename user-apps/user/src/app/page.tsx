import type { TestType } from "@repo/types/test-type";
import Button from "@repo/ui/atoms/Button/Button";

export default function Home() {
  const data: TestType = {};
  return (
    <div className="flex">
      hello {JSON.stringify(data)}
      <Button variant="register">aaa</Button>
    </div>
  );
}
