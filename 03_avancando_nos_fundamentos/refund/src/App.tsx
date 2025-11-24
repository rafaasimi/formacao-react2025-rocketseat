import { BrowserRouter, Route, Routes } from "react-router";
import { Layout } from "./pages/layout";
import { RefundList } from "./pages/refund-list";
import { ComponentsList } from "./pages/components-list";
import { NewRefundRequest } from "./pages/new-refund-request";
import { RefundDetail } from "./pages/refund-detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<RefundList />} />
          <Route path="novo-reembolso" element={<NewRefundRequest />} />
          <Route path="reembolso/:id" element={<RefundDetail />} />
          <Route path="componentes" element={<ComponentsList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
