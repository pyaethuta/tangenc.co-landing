import React from 'react'

export const Licensing = () => {
  return (
    <div className='container mx-auto mt-[30px] md:mt-[50px] '>
      <div className='mx-[10px] md:mx-auto  h-auto  pt-[90px] md:pt-[65px] max-w-[720px] tracking-wide pb-[90px] md:pb-[90px]'>
        <h1 className=' text-3xl md:text-5xl pb-4 font-bold '>Licensing</h1>
        <p className='text'>September 27, 2023</p>
        <h1 className=' mt-[40px] text-3xl md:text-4xl pb-4 font-bold'>Software Licensing Agreement</h1>
        <p className=' pt-4 leading-7 text'>This Software Licensing Agreement (&quot;Agreement&quot;) is entered into between [Your Company Name], hereinafter referred to as the &quot;Licensor,&quot; and the individual or entity that accepts the terms of this Agreement, hereinafter referred to as the &quot;Licensee.&quot;</p>
        
        <h1 className='headers'>License Grant</h1>
        <p className='text'>Subject to the terms and conditions of this Agreement, Licensor grants Licensee a non-exclusive, non-transferable, and revocable license to use the software (&quot;Software&quot;) provided by Licensor. This license allows Licensee to install and use the Software on a single computer or device.</p>

        <h1 className='headers'>License Restrictions</h1>
        <p className='text'>
        <ol className='list-decimal ml-[20px]'>
          <li> Licensee may not sublicense, sell, assign, or otherwise transfer the Software to any third party.</li>
          <li> Licensee may not modify, reverse engineer, decompile, or disassemble the Software.</li>
          <li> Licensee may not distribute, share, or make the Software available over a network, either in part or in its entirety.</li>
        </ol> </p>

        <h1 className='headers'>Intellectual Property</h1>
        <p className='text'>The Software is the intellectual property of Licensor and is protected by copyright and other intellectual property laws. Licensee acknowledges that this Agreement does not grant Licensee any ownership or rights to the Software.</p>

        <h1 className='headers'>Termination</h1>
        <p className='text'>Licensor reserves the right to terminate this Agreement at any time if Licensee fails to comply with its terms. Upon termination, Licensee must cease using the Software and destroy all copies.</p>

        <h1 className='headers'>Warranty Disclaimer</h1>
        <p className='text'>The Software is provided &quot;as is&quot; and without warranties. Licensor disclaims any and all warranties, including but not limited to, the implied warranties of merchantability and fitness for a particular purpose.</p>

        <h1 className='headers'>Limitation of Liability</h1>
        <p className='text'>Licensor shall not be liable for any damages, including but not limited to, direct, indirect, special, or consequential damages arising out of the use or inability to use the Software.</p>

        <h1 className='headers'>Entire Agreement</h1>
        <p className='text'>This Agreement constitutes the entire understanding between the parties and supersedes all previous agreements, understandings, and representations. <br /><br />By accepting the terms of this Agreement, Licensee acknowledges that they have read, understood, and agree to be bound by its terms.</p>

      </div>
      
    </div>
  )
}
