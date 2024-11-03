import { HomeTable } from "@/components/table";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";

export const Home = () => {
  return (
    <ResizablePanelGroup direction="horizontal" className="flex flex-col md:flex-row gap-4 p-4 min-h-screen bg-background text-foreground">
      <ResizablePanel defaultSize={50} minSize={30} className="flex-1 p-4 bg-card rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Em Desenvolvimento</h2>
        <p>
          Aqui você pode adicionar novos recursos, gráficos ou informações
          adicionais.
        </p>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50} minSize={30} className="flex-1 p-4 bg-card rounded-lg shadow-md">
        <HomeTable />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};
