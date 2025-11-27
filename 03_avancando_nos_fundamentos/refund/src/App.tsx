import { BrowserRouter, Route, Routes } from "react-router";
import { Layout } from "./pages/layout";
import { Refunds } from "./pages/refunds";
import { ComponentsList } from "./pages/components-list";
import { NewRefundRequest } from "./pages/new-refund-request";
import { RefundDetail } from "./pages/refund-detail";
import { RefundRequestSucess } from "./pages/components/refund-request-sucess";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NuqsAdapter } from "nuqs/adapters/react-router/v7";
import { Toaster } from "./components/ui/sonner";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NuqsAdapter>
        <Toaster />
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Refunds />} />
              <Route path="novo-reembolso" element={<NewRefundRequest />} />
              <Route
                path="novo-reembolso/sucesso"
                element={<RefundRequestSucess />}
              />
              <Route path="reembolso/:id" element={<RefundDetail />} />
              <Route path="componentes" element={<ComponentsList />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </NuqsAdapter>
    </QueryClientProvider>
  );
}

export default App;
