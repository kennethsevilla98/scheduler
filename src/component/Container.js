function Container({children}) {
  return (
    <div className="flex flex-col h-screen max-w-3xl container mx-auto bg-gray-50 relative">{children}</div>
  );
}

export default Container;
