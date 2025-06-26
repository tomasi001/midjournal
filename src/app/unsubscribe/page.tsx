import { Suspense } from "react";
import UnsubscribeClientPage from "./client";

export default function UnsubscribePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UnsubscribeClientPage />
    </Suspense>
  );
}
