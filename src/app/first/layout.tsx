

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<>
<h2>NAV ITEM in first page</h2>
        {children}
</>
        
  );
}
