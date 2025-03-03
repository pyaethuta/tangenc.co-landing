function MembersCard({ member }) {
  return (
    <div className="transform hover:-translate-y-4 transition duration-300">
      <img
        src={member.profile}
        alt={name}
        className="w-full h-[200px] md:h-[280px] object-cover rounded-[34px]"
      />
      <h3 className="text-white font-bold text-lg mt-4">{member.name}</h3>
      <p className="text-gray-400 text-sm">{member.position}</p>
    </div>
  );
}

export default MembersCard;
