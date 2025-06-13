interface Products {
  name: string;
  vendor: string;
  sales: number;
  earnings: string;
}

interface TopProductsProps {
  products: Products[];
}

export function TopProducts({ products }: TopProductsProps) {
  return (
    <div className="space-y-4">
      {products.map((product, index) => (
        <div key={index} className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium">{index + 1}</span>
            </div>
            <div>
              <p className="text-sm font-medium">{product.name}</p>
              <p className="text-xs text-muted-foreground">
                by {product.vendor} . {product.sales} sales
              </p>
            </div>
          </div>
          <div className="text-sm font-medium text-green-600">
            {product.earnings}
          </div>
        </div>
      ))}
    </div>
  );
}
