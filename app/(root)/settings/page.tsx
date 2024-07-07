import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import Hide from "@/public/assets/hide.svg"
import Computer from "@/public/assets/computer.svg"
import Iphone from "@/public/assets/iphone.svg"
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Security from "@/public/assets/security.svg"
import Image from 'next/image'

export default function Page() {
  return (
    <section className='flex flex-col p-16'>
      <h2 className='font-bold text-2xl'>Settings</h2>
      {/** Settings Container */}
      <div className='flex flex-col gap-8 mt-16'>
        {/** Change Password Main Section */}
        <div className='relative flex justify-center items-start bg-red-500-2 gap-24'>
          <div className='flex flex-col justify-start items-start gap-4'>
            <h3 className='relative bg-yellow-500-2 text-[16px] font-bold'>Change Password</h3>
            <p className='w-[350px] text-sm'>Add extra security layer to your account by updating your password.</p>
          </div>

          {/** Password section */}
          <div className='flex flex-col justify-center items-end bg-cyan-500-2 border rounded-xl'>
            <div className='flex flex-col gap-4 bg-green-500-2 p-8'>
              {/** Input: Change PASSWORD  */}
              <div className=''>
                <h4 className='font-semibold text-sm'>Current password</h4>
                <Input width={500} placeholdertemplatestr='Enter current password' icon={<Hide />} backgroundcolor='fff' isflipped={true} reststyle={{
                  input: 'border border-[#BDC1CA]'
                }} />
              </div>

              <div className=''>
                <h4 className='font-semibold text-sm'>New password</h4>
                <Input width={500} placeholdertemplatestr='Enter current password' icon={<Hide />} backgroundcolor='fff' isflipped={true} reststyle={{
                  input: 'border border-[#BDC1CA]'
                }} />
              </div>

              <div className=''>
                <h4 className='font-semibold text-sm'>Confirm new password</h4>
                <Input width={500} placeholdertemplatestr='Enter current password' icon={<Hide />} backgroundcolor='fff' isflipped={true} reststyle={{
                  input: 'border border-[#BDC1CA]'
                }} />
              </div>
            </div>
            <Button bgcolor='115467' text={{ content: 'Change password', color: 'ffffff' }} reststyle={{
              container: 'p-2 rounded-[6px] mr-8 translate-y-[-16px]',
              text: 'font-regular text-sm'
            }}></Button>
          </div>
        </div>

        {/** 2-Step authentication */}
        <div className='relative flex justify-center items-start bg-red-500-2 gap-24'>
          <div className='flex flex-col justify-start items-start gap-4 bg-yellow-500-2'>
            <h3 className='relative bg-yellow-500-2 text-[16px] font-bold'>2-Step authentication</h3>
            <p className='w-[350px] text-sm'>Add extra security layer to your account with a second authentication steps</p>
          </div>

          {/** 2-Step authentication section */}
          <div className='flex flex-col justify-start items-end bg-cyan-500-2 border rounded-xl'>
            <div className='flex flex-col gap-4 bg-green-500-2 p-8'>
              {/** Input: Change PASSWORD  */}
              <div className='flex flex-col gap-4'>
                <h4 className='font-regular text-[16px]'>2-Step authentication is off</h4>
                <Separator />
                <div className='flex justify-around items-center gap-4'>
                  <Security />
                  <p className='max-w-[450px]'>If we detect a sign-in from an unknown device or browser, we’ll ask for password and a verification code.</p>
                </div>
              </div>
            </div>
            <Button bgcolor='115467' text={{ content: 'Activate authentication', color: 'ffffff' }} reststyle={{
              container: 'p-2 rounded-[6px] mr-8 translate-y-[-16px]',
              text: 'font-regular text-sm'
            }}></Button>
          </div>
        </div>
        
        {/** Login Sessions */}
        <div className='relative flex justify-center items-start bg-red-500-2 gap-24'>
          <div className='flex flex-col justify-start items-start gap-4 bg-yellow-500-2'>
            <h3 className='relative bg-yellow-500-2 text-[16px] font-bold'>Login sessions</h3>
            <p className='w-[350px] text-sm'>Places & devices where you logged into the app</p>
          </div>

          {/** Login Sessions section */}
          <div className='flex flex-col justify-center items-center bg-cyan-500-2 border rounded-xl bg-cyan-500-2'>
            <div className='flex flex-col gap-4 bg-green-500-2 p-8'>
              <div className='flex flex-col gap-4'>
                <div className='flex justify-between items-center gap-[16rem]'>
                  <div className='flex justify-start items-start gap-4'>
                    <Computer />
                    <div className='flex flex-col'>
                      <h4 className='font-regular text-[14px] text-[#7B7A7A]'>Chrome on Mac OS X</h4>
                      <span className='font-regular text-[14px] text-[#7B7A7A]'>11 Oct at 4:20 PM</span>
                    </div>
                  </div>
                  <Button 
                    style={{
                      border: "#9095A1"
                    }}
                    reststyle={{
                      container: "border p-2 rounded-[6px]"
                    }}
                    text={{
                      content: "Log out",
                      color: "9095A1"
                    }}
                  />
                </div>
                <Separator />
              </div>
              
              <div className='flex flex-col gap-4 '>
                <div className='flex justify-between items-center'>
                  <div className='flex justify-start items-start gap-4'>
                    <Iphone />
                    <div className='flex flex-col'>
                      <h4 className='font-regular text-[14px] text-[#7B7A7A]'>Safari on iPhone XS</h4>
                      <span className='font-regular text-[14px] text-[#7B7A7A]'>10 Oct at 6:09 PM
                      California, USA</span>
                    </div>
                  </div>
                  <Button 
                    style={{
                      border: "#9095A1"
                    }}
                    reststyle={{
                      container: "border p-2 rounded-[6px]"
                    }}
                    text={{
                      content: "Log out",
                      color: "9095A1"
                    }}
                  />
                </div>
                <Separator />
              </div>

              <div className='flex flex-col gap-4 '>
                <div className='flex justify-between items-center'>
                  <div className='flex justify-start items-start gap-4'>
                    <Iphone />
                    <div className='flex flex-col'>
                      <h4 className='font-regular text-[14px] text-[#7B7A7A]'>Chrome on Windows 10</h4>
                      <span className='font-regular text-[14px] text-[#7B7A7A]'>07 Oct at 3:16 PM
                      California, USA</span>
                    </div>
                  </div>
                  <Button 
                    style={{
                      border: "#9095A1"
                    }}
                    reststyle={{
                      container: "border p-2 rounded-[6px]"
                    }}
                    text={{
                      content: "Log out",
                      color: "9095A1"
                    }}
                  />
                </div>
                <Separator />
              </div>
            </div>
          </div>
        </div>

        {/** Deactivate Sections */}
        <div className='relative flex justify-around items-start bg-red-500-2 gap-16'>
          <div className='flex flex-col justify-start items-start gap-4 bg-yellow-500-2'>
            <h3 className='relative bg-yellow-500-2 text-[16px] font-bold'>Deactivate</h3>
          </div>

          {/** 2-Step authentication section */}
          <div className='flex flex-col justify-start items-end bg-cyan-500-2 border rounded-xl'>
            <div className='flex justify-center items-center gap-16 bg-green-500-2 p-16'>
              {/** Input: Change PASSWORD  */}
              <div className='flex flex-col gap-4'>
                <p className='font-regular text-sm'>You can reactivate whenever you want.</p>
              </div>
              <Button bgcolor='FDF2F2' text={{ content: 'Deactivate account', color: 'DE3B40' }} reststyle={{
                container: 'p-2 rounded-[6px]',
                text: 'font-regular text-sm'
              }}></Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}