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

const angel_one_7_11_2023 = () => {
    const PAGE_SEO: iSEO = {
        title: 'Angel One',
        keywords: 'Get ₹500 per refer',
        author: 'Arman Mondal'
    }
    return (
        <PageLayout PAGE_SEO={PAGE_SEO} home>
            <div className="container pb-5 md:mt-[50px] pt-20 md:pt-0">
                <Text title className="text-3xl">
                (🔥 धमाल) Angel One  ₹500/Refer | Verified

                </Text>
                <p className="my-5">
                Refer and get ₹500 
                                </p>
                <hr />
                <Text subtitle className="mt-5 text-[10px] font-thin">
                </Text>
                <div className="h-[2px] w-full bg-black" >

                </div>
                <Text subtitle className="mt-5 text-red-500">
                Angel One Refer & Earn Offer :
                </Text>
                <table className="table-auto text-xl">
 
</table>
 <br />
 <div className="h-[2px] w-full bg-black" >

</div>
<Text className="mt-5 text-xl text-green-500" >
What You Need To Open Angel One Account ? :
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
                Angel One App Referral Code – How to Refer and get ₹500 Free Amazon Gift Card  Instantly :
                </Text>
               <Text>
               1. First of All Download Groww App From Given Link Here. :


               </Text >
               <Text>
               <a href="https://play.google.com/store/apps/details?id=com.msf.angelmobile&referrer=742045ALI::rne_source=Earn_Rewards_Voucher4::rne_field2=Earn_Rewards_Voucher4::rne_campaign=homepage" className="rounded-full m-5 bg-blue-800 p-2" >Click Here</a>
               
               </Text>
               <Text>
              <h1 className="bg-red-500 w-max" >  Referral CODE : 742045ALI</h1>
               
               </Text>
            
            </div>
        </PageLayout>
    )
}

export default angel_one_7_11_2023;