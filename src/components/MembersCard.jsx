function MembersCard({ member }) {
  // Use the optimized image from the public directory
  const imageUrl = `/optimized-members/${member.id}.jpg`;

  return (
    <div className="transform hover:-translate-y-4 transition duration-300">
      <div className="relative w-full h-[200px] md:h-[280px] rounded-[34px] overflow-hidden bg-gray-200">
        <img
          src={imageUrl}
          alt={member.name}
          loading="lazy"
          className="w-full h-full object-cover rounded-[34px] transition-opacity duration-300"
          onLoad={(e) => {
            e.target.style.opacity = '1';
          }}
          style={{ opacity: 0 }}
        />
      </div>
      <h3 className="text-white font-bold text-lg mt-4">{member.name}</h3>
      <p className="text-gray-400 text-sm">{member.position}</p>
    </div>
  );
}

export default MembersCard;
