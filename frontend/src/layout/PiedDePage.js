import React from "react";
import { Stack } from "react-bootstrap";

function PiedDePage() {
  return (
    <div className="bg-dark text-light py-3">
      <Stack direction="horizontal" className="justify-content-center" gap={3}>
        <p>First item</p>
        <p>Second item</p>
        <p>Third item</p>
        <p>&copy; {new Date().getFullYear()} OrthoBien-Être</p>
      </Stack>
    </div>
  );
}

export default PiedDePage;
