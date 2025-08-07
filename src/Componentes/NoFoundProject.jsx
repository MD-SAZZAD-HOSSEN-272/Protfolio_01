const NoFoundProject = () => {
  return (
    <section className="py-12 px-4 md:px-10">
      <div className="flex flex-col items-center justify-center text-center text-gray-400 py-16">
        <img
          src="https://cdn-icons-png.flaticon.com/512/7486/7486791.png"
          alt="No Projects"
          className="w-24 h-24 mb-6 opacity-50"
        />
        <h3 className="text-2xl font-semibold text-purple-400 mb-2">
          No Projects Available
        </h3>
        <p className="text-sm text-gray-500 max-w-sm">
          You haven’t added any projects yet. Once available, they’ll appear
          here.
        </p>
      </div>
    </section>
  );
};

export default NoFoundProject;
