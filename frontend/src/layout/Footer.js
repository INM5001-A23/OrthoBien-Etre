import React from "react";
import { Stack } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-light py-3">
      <Stack direction="horizontal" className="justify-content-center" gap={3}>
        <p>First item</p>
        <p>Second item</p>
        <p>Third item</p>
        <p>&copy; {new Date().getFullYear()} OrthoBien-Être</p>
      </Stack>
    </footer>
  );
}

export default Footer;
