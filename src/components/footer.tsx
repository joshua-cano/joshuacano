export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="mx-auto max-w-screen-lg px-4 py-16 md:px-8">
      <p className="text-lg font-semibold">Joshua Cano</p>
      <p className="text-sm text-muted-foreground">
        &copy; {year} | All rights reserved.
      </p>
    </div>
  );
};
