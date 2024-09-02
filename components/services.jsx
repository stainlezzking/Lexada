const Service = ({ title, content, children, ...props }) => {
  return (
    <div {...props} className="border-gray border rounded-2xl p-[30px] space-y-6">
      <div>{children}</div>
      <div className="space-y-2">
        <h3 className="text-xl md:text-2xl font-medium text-main"> {title}</h3>
        <h3 className="md:text-lg "> {content}</h3>
      </div>
    </div>
  );
};

export default Service;
