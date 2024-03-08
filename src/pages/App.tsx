import { Box, Section } from "@/components";
import { useHttp } from "@/hooks/useHttp";
import {
  Button,
  Image,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  User,
} from "@nextui-org/react";
import React from "react";

export const App = () => {
  return (
    <>
      <br />
      <div className="container">
        <div className="row g-3">
          <div className="col-12">
            <Header />
          </div>
          <div className="col-md-8">
            <Box>
              <Section height="400px">
                <div className="text-center">
                  <h1 className="text-3xl font-bold">Product Name</h1>
                  <p className="text-semibold">Product Description</p>
                </div>
                <br />
                <div>
                  <Image
                    src="https://via.placeholder.com/800x300"
                    alt="Placeholder"
                    width={800}
                    height={200}
                  />
                </div>
                <br />
                <div>
                  <Button>Teklif ver</Button>
                </div>
              </Section>
            </Box>
          </div>
          <div className="col-md-4">
            <Sidebar />
            <br />
            <OtherAuctions />
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

const Header = () => {
  return (
    <Box>
      <div className="container">
        <div className="flex items-center justify-between">
          <div></div>
          <div>
            <User name="John Doe" />
          </div>
        </div>
      </div>
    </Box>
  );
};

const Sidebar = () => {
  const { data, isLoading } = useHttp("/users");

  let users = data?.users || [];

  users = users.map((user: any) => ({
    ...user,
    amount: Math.floor(Math.random() * 1000),
  }));

  const [page, setPage] = React.useState(1);
  const rowsPerPage = 4;

  // order by biggest amount to lowest
  const orderedUsers = users.sort((a: any, b: any) => b.amount - a.amount);

  const pages = Math.ceil(orderedUsers?.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return orderedUsers.slice(start, end);
  }, [page, orderedUsers]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Table
      aria-label="ads"
      bottomContent={
        <div className="flex w-full justify-center">
          <Pagination
            isCompact
            showControls
            showShadow
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
          />
        </div>
      }
    >
      <TableHeader>
        <TableColumn>NAME</TableColumn>
        <TableColumn>ROLE</TableColumn>
      </TableHeader>
      <TableBody className="h-[600px] overflow-auto">
        {items.map((user: any) => (
          <TableRow key={user.id}>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.amount}₺</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

const OtherAuctions = () => {
  const { data, isLoading } = useHttp("/products");

  const products = React.useMemo(() => data?.products || [], [data]);

  const [page, setPage] = React.useState(1);
  const rowsPerPage = 4;

  const pages = Math.ceil(products?.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return products.slice(start, end);
  }, [page, products]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Table
      aria-label="asds"
      bottomContent={
        <div className="flex w-full justify-center">
          <Pagination
            isCompact
            showControls
            showShadow
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
          />
        </div>
      }
    >
      <TableHeader>
        <TableColumn>Ürün Adı</TableColumn>
        <TableColumn>Başlangıç Fiyatı</TableColumn>
      </TableHeader>
      <TableBody className="h-[600px] overflow-auto">
        {items.map((p: any) => (
          <TableRow key={p.id}>
            <TableCell>{p.title}</TableCell>
            <TableCell>{p.price}₺</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
