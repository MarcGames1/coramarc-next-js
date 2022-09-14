import AdminLayout from "../../../layout/AdminLayout"
import React, {} from "react";
import { CategoryProvider } from "../../../components/admin/AdminPanel";
import AddProductForm from '../../../components/admin/AdminPanel/Product/AdaugaProdus'
const AdaugaProdus = () => {
  

    




    return (
      <AdminLayout>
        <CategoryProvider>
          <h1 className="text-center">Adauga Produs</h1>
          <AddProductForm />
        </CategoryProvider>
      </AdminLayout>
    );
}


export default AdaugaProdus