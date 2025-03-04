import { useEffect, useState } from 'react'
import MembersCard from '../components/MembersCard'
import { getMembers } from '../api/members'

export const About = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const data = await getMembers();
        setMembers(data);
      } catch (error) {
        console.error('Error fetching members:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  return (
    <div className='container mx-auto mt-[30px] md:mt-[70px]'>
      <div className='mx-[10px] md:mx-auto bg-[#1A1A1A]  rounded-[32px] h-auto  pt-[35px] md:pt-[70px] px-[24px] md:px-[64px] pb-[8px]  max-w-[1150px] mb-6'>
        <div className='flex flex-col md:flex-row justify-between pb-16 text-center md:text-left '>
          <h1 className='text-2xl md:text-5xl text-[#03FFA3] font-bold mb-1'>Not sure how to choose a vendor?</h1>
          <div className='md:w-[700px] text-sm md:text-lg leading-6 tracking-wide pt-6'>
            At Tangenc, we blend the idea and technology to craft coherent digital experiences that align effortlessly with your business goals.
          </div>
        </div>
        <div className='-mx-[20px]   md:-mx-[56px]  h-[250px] md:h-[380px] overflow-hidden rounded-[32px] '>
          <img  src="https://framerusercontent.com/images/5iuQOEMKfBLccEeTbmc2fFLN7Q.jpg" alt="" className="w-full h-full object-cover"/>
        </div>
        </div>
       
        <div className='mx-[10px] md:mx-auto bg-[#1A1A1A]  rounded-[32px] h-auto  pt-[35px] md:pt-[70px] px-[24px] md:px-[64px] pb-[35px] md:pb-[8px] max-w-[1150px] mb-6'>
          <div className='md:px-32 text-center tracking-wide leading-6 text-sm md:text-lg'>
            <h1 className='text-[#03FFA3] text-5xl font-bold pb-4'>Do better with Us!</h1>
            <div>At Tangenc, we seamlessly blend the idea and technology to craft coherent digital experiences that align effortlessly with your business goals. 
            </div>
            <br />
            <div>Just like those tangent lines—touching curves at distinct points to form unique connections—the Tangenc team delivers innovative digital solutions, transforming your ideas into extraordinary realities.
            </div>
          </div><br /><br />
        </div>

        <div className="bg-[#262626] rounded-4xl px-4 py-16 md:px-[10px] -mx-[12px] md:-mx-[5px] md:py-[60px] mt-28 ">
            <div className="text-center max-w-[600px] mx-auto px-4 tracking-wide leading-6 text-sm md:text-lg">
              <h1 className="text-[#03FFA3] text-2xl md:text-4xl font-bold pb-4" data-aos="fade-up">Meet the Minds Behind Tangenc</h1>
              <p data-aos="fade-up">Discover the talented individuals who bring Tangenc to life, each dedicated to pushing the boundaries of digital solutions.</p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6  mt-20 mx-[10px] md:mx-auto  max-w-[1150px]' data-aos="fade-up">
              {loading ? (
                Array(9).fill(0).map((_, index) => (
                  <div key={index} className="animate-pulse">
                    <div className="w-full h-[200px] md:h-[280px] rounded-[34px] bg-gray-700"></div>
                    <div className="h-6 bg-gray-700 rounded mt-4 w-3/4"></div>
                    <div className="h-4 bg-gray-700 rounded mt-2 w-1/2"></div>
                  </div>
                ))
              ) : (
                members.map((member) => (
                  <MembersCard key={member.id} member={member} />
                ))
              )}
            </div>
        </div>
    </div>
  )
}
