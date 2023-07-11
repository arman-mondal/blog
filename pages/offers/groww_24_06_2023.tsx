/**These are necessary imports / components for the page */
import { PageLayout, Text, LinkTo, Seperator, Image } from "../../src/components";
import CodeBlock from "../../src/components/CodeBlock";
import { iSEO } from "../../src/shared/interfaces";
import { AiFillYoutube, AiFillTwitterCircle } from "react-icons/ai";
import { BiAbacus, BiAdjust } from "react-icons/bi";

const HowToUseIcons = `
//  import icons from react-icons
    import { ..., AiFillYoutube } from "react-icons/ai";
    const Article = () => {
        return (
            <AiFillYoutube />
            {/*to change size*/}
            <AiFillYoutube className="text-[50px]" />
            {/*to change color*/}
            <AiFillYoutube className="text-[#631E9E]" />
            {/*to change color using tailwind css classes*/}
            <AiFillYoutube className="text-blue-600" />
            {/*to give paddings and margins*/}
            <AiFillYoutube className="ml-[15px] mr-[20px] p-[20px]" />
            {/*to use inline i.e one after other in a line*/}
            <AiFillYoutube className="inline-block" />
        )		
    }

    export default Article;
`

const HowToUseDiffGroupIcons = `
    //  icons from Ant Icons
    import { AiFillYoutube } from "react-icons/ai";
    //  icons from BoxIcons
    import { BiAbacus, BiAdjust } from "react-icons/bi";
    const Article = () => {
        return (
            {/*icons from Ant Icons*/}
            <AiFillYoutube />
            <AiFillTwitterCircle />
            {/*icons from BoxIcons*/}
            <BiAbacus />
            <BiAdjust />
        )		
    }

    export default Article;
`

const groww_24_06_2023 = () => {
    const PAGE_SEO: iSEO = {
        title: 'Icons',
        keywords: 'webexpx, contact us, webexpe13@gmail.com, next js blog template',
        author: 'Mayur Nalwala, Rupali Yadav'
    }
    return (
        <PageLayout PAGE_SEO={PAGE_SEO} home>
            <div className="container pb-5 md:mt-[50px] pt-20 md:pt-0">
                <Text title className="text-3xl">
                (🔥 धमाल) Groww App – ₹100 Signup Bonus In Bank + ₹400/Refer In Bank | Verified

                </Text>
                <p className="my-5">
                Sign Up & Get ₹101 Free Bank Cash Instantly From Groww App Refer & Earn
                                </p>
                <hr />
                <Text subtitle className="mt-5 text-[10px] font-thin">
                Groww App Referral Code, Groww App Invite Earn, Groww App Refer Earn, Groww App Invitation Code – Hello Coolz Readers!! Here i am back with the biggest loot from Stocks, Demat, Mutual Fund, SIP App named Groww App. This is very old app and This App is Verified by us personally.
                Just sign Up on Groww App using Groww Referral Code and Get Rs.101 Bank Cash instantly on Sign Up. This is confirmed by us and we are letting you know to make a big loot for you guys!!
                With Groww, Investing in mutual funds, stocks, digital gold are made easy, fast & secured. Enjoy 100% paperless onboarding without any hassles and Invest in popular mutual funds, stocks & buy gold in a few minutes from the comfort of your home. Here Sign Up and Get Rs.101 Directly in Bank and Get Rs.100 on Successful Referral. This is going to be biggest loot for us.

                </Text>
                <div className="h-[2px] w-full bg-black" >

                </div>
                <Text subtitle className="mt-5 text-red-500">
                Groww App Referral Code June 2023 :
                </Text>
                <table className="table-auto text-xl">
  <thead>
    <tr>
      <th>Groww App Refer & Earn</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Download Link	</td>
      <td><a className="text-red-500" href="https://app.groww.in/v3cO/ewplb4fx" >Download Link</a></td>
    </tr>
    <tr>
      <td>Sign Up Bonus	</td>
      <td>None</td>
    </tr>
    <tr>
      <td>Sign Up Bonus</td>
      <td>₹200</td>
    </tr>
  </tbody>
</table>
 <br />
 <div className="h-[2px] w-full bg-black" >

</div>
<Text className="mt-5 text-xl text-green-500" >
What You Need To Open Groww Account ? :
</Text>
<Text>
👉 Aadhar Linked Mobile Number with OTP
</Text>
<Text>
👉 Aadhar Card and PAN Card Photo
</Text>
<Text>

👉 Live Selfie Photo of PAN/Aadhar Holder
</Text><Text>
👉 Digital Signature in App
</Text>
<Text>
👉 Physical OR Payments Bank Details / Digital OR Copy Statement
    </Text>
    <div className="h-[2px] w-full bg-black" >

</div>
                <Text subtitle className="mt-5 text-2xl text-blue-600">
                Groww App Referral Code – How to Sign Up & Get ₹101 Free Bank Cash Instantly :
                </Text>
               <Text>
               1. First of All Download Groww App From Given Link Here. :


               </Text>
               <a href="https://app.groww.in/v3cO/ewplb4fx" className="rounded-full m-5 bg-blue-800 p-2" >Click Here</a>
               <Text>
               2. Open App and Login using your Google Mail ID.

               </Text>
               <div className="justify-center flex m-5">
               <img className="justify-center" src="https://www.coolztricks.com/wp-content/uploads/2021/03/photo_2021-03-14_22-04-55-206x300.jpg" />
                  </div>
                  <Text>
                  3. Enter your Aadhar Linked Mobile Number and verify it with OTP.

                    </Text>
<Text>
4. Enter your PAN Card Number in Next Step.
            
    </Text>
    <Text>
    5. It will show you the details of PAN Card Holder which you have entered. Confirm it.
            
    </Text>
    <div className="justify-center flex m-5">
               <img className="justify-center" src="https://www.coolztricks.com/wp-content/uploads/2021/03/photo_2021-03-14_22-04-58-152x300.jpg" />
                  </div>
                  <Text>
                  6. Enter Date of Birth of PAN Holder.


                  </Text>
                  <div className="justify-center flex m-5">
               <img className="justify-center" src="https://www.coolztricks.com/wp-content/uploads/2021/03/photo_2021-03-14_22-04-59-212x300.jpg" />
                  </div>
                <b>Note* :</b> when you search any icon using the search option in react icons, all the icons from different groups will be displayed mixed so to know from where to import the icons see the first 2 letters of the icon name then import that icon group.
                <div className="px-4 py-3 dark:bg-slate-800 bg-blue-200 rounded my-5">
                    <Text p className="!text-lg leading-relaxed mb-0">
                        For any any queries related to this project / template feel free to connect with us at <u>webexpe13@gmail.com</u>.
                        You can also post any comments on our <a href="https://github.com/webexpe13/blog-template-using-nextjs-typescript-tailwindcss/discussions" target="_blank" rel="noopener noreferrer"><u><i>github discussions</i></u></a>.
                    </Text>
                </div>
            </div>
        </PageLayout>
    )
}

export default groww_24_06_2023;