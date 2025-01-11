'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PlusCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductsTable } from './products-table';
import { SubEntityForm } from './SubEntityForm'; // Ensure the path is correct
import { useState } from 'react';

export default function ProductsPage() {
  const [isPopupVisible, setPopupVisible] = useState(false);

  return (
    <>
      {/* Tabs Section */}
      <Tabs defaultValue="all">
        <div className="flex items-center">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="draft">Canceled</TabsTrigger>
          </TabsList>
          <div className="ml-auto flex items-center gap-2">
            {/* Add Product Button */}
            <Button
              size="sm"
              className="h-8 gap-1"
              onClick={() => setPopupVisible(true)} // Show popup on click
            >
              <PlusCircle className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Add Product
              </span>
            </Button>
          </div>
        </div>
        <TabsContent value="all">
          <ProductsTable products={[]} offset={0} totalProducts={0} />
        </TabsContent>
        <TabsContent value="active">
          <ProductsTable products={[]} offset={0} totalProducts={0} />
        </TabsContent>
        <TabsContent value="draft">
          <ProductsTable products={[]} offset={0} totalProducts={0} />
        </TabsContent>
      </Tabs>

      {/* Popup Modal */}
      {isPopupVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 rounded-3xl ">
          <div className="bg-black p-6 rounded shadow-lg w-full max-w-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg text-white">Add New Product</h2>
              {/* Cancel Button */}
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => setPopupVisible(false)} // Close popup on click
              >
                <XCircle className="h-5 w-5" />
              </button>
            </div>
            {/* SubEntityForm */}
            <SubEntityForm />
          </div>
        </div>
      )}
    </>
  );
}
