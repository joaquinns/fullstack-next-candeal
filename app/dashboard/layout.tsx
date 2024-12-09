import { Container } from "../ui/Container";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container tagHtml="section">
      <h1 className="text-white">Esto es el layout del dashboard</h1>
      <div>{children}</div>
    </Container>
  );
}
