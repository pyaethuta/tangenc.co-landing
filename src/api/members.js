import { members } from '../constant';

export const getMembers = async () => {
  await new Promise(resolve => setTimeout(resolve, 100));
  
  return members.map(member => ({
    ...member,
    profile: `/api/members/${member.id}/profile` // This would be the actual image URL in production
  }));
}; 