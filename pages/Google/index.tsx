import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head'


export default function index() {
  return (
    <>
    <Head>
           <title>รับทำโฆษณาGoogleAdsสายเทา โฆษณาสายเทาเพื่อธุรกิจของคุณ</title>
           <meta name="description" content="ทำโฆษณาเว็บไซต์ต่างๆด้วยทีมงานมือถือชีพ อัตราค่าบริการเพียงเดือนละ 9,900 บาทจบไม่มีค่าใช้จ่ายใดๆเพิ่มเติมทั้งสิ้น มีรีวิวจากลูกค้าจริงให้ชมไม่บิดไม่ทิ้งงานแน่นอน ทางทีมงานมีการรายงานผลงานทุกวัน"/>

    </Head>
    
   
    <div className="container">
<ul>
  <h3>รายละเอียดบริการ รับทำโฆษณาGoogle Ads สายเทา</h3>
   <li>ค่าบริการ เหมาจ่ารายเดือนเพียงเดือนละ 9,900 บาท ไม่มีค่าใช้ค่าใดใดเพิ่มเติมทั้งสิน</li>
   <li>ทางเรารัน โฆษณาให้ ตลอดเาลา(หรือตามลูกค้ากำหนด) จำนวน30วันเต้ม </li>
   <li>บัญชีโฆษณา ทางเราจัดการให้ทั้งหมดตลอดเวลา 30วัน ไม่จำกัดจำนวน </li>
   <li>เว็บไซต์ เซลเพจหน้าขาว ทางเราจัดการเองทั้งหมด รวมไปถึงโดเมน (ฟรี) </li>
   <li>รูปภาพ ต่างๆ (รูปโปรหากมี) ทางลูกค้าควรจัดหามาเอง อย่างน้อย 5 รูป png, jpg, gif</li>
    <li>ทางเราส่งรายงานผลให้ทุกวัน เวลา 10.00น.ของทุกวัน</li>
    <li>ลูกค้าสามารถ เข้าตรวจสอบบช.ด้วยตัวเองได้ผ่าน VPS เท่านั้น ในส่วนนี้ลูกค้าเสียค่าบริการเอง</li>
    <li>บัตรเครดิต สำหรับชำระค่าโฆษณา ให้กลับGoogle Ads สามารถใช้บัตรของทางลูกค้าเองได้เลย หรือ จะใช้บัตรที่ทางเราเตรียมไว้ให้ก็ได้ ไม่บวกเพิ่ม(แนะนำ) </li>
     <li>ขอบคุณลูกค้าทุกท่านที่ใช้บริการทีมงานเราครับผม</li>
     </ul>

     <div className="image-container">
          <Image src="/GoogleAds/gg.jpg" alt="Facebook Ads" fill className="image" style={{ objectFit: 'cover' }} />
        </div><Link href="/">โฆษณา Google Ads สายเทา</Link>
     <div className="image-container">
          <Image src="/GoogleAds/Google_Ads(1).jpg" alt="Facebook Ads" fill className="image" style={{ objectFit: 'cover' }} />
        </div><Link href="/">โฆษณา Google Ads สายเทา</Link>
     <div className="image-container">
          <Image src="/GoogleAds/Google_Ads(2).jpg" alt="Facebook Ads" fill className="image" style={{ objectFit: 'cover' }} />
        </div><Link href="/">โฆษณา Google Ads สายเทา</Link>
     <div className="image-container">
          <Image src="/GoogleAds/Google_Ads(3).jpg" alt="Facebook Ads" fill className="image" style={{ objectFit: 'cover' }} />
        </div><Link href="/">โฆษณา Google Ads สายเทา</Link>
     <div className="image-container">
          <Image src="/GoogleAds/Google_Ads(4).jpg" alt="Facebook Ads" fill className="image" style={{ objectFit: 'cover' }} />
        </div><Link href="/">โฆษณา Google Ads สายเทา</Link>
     <div className="image-container">
          <Image src="/GoogleAds/Google_Ads(5).jpg" alt="Facebook Ads" fill className="image" style={{ objectFit: 'cover' }} />
        </div><Link href="/">โฆษณา Google Ads สายเทา</Link>
     <div className="image-container">
          <Image src="/GoogleAds/Google_Ads(6).jpg" alt="Facebook Ads" fill className="image" style={{ objectFit: 'cover' }} />
        </div><Link href="/">โฆษณา Google Ads สายเทา</Link>
    
     <div className="image-container">
          <Image src="/GoogleAds/Google_Ads(8).jpg" alt="Facebook Ads" fill className="image" style={{ objectFit: 'cover' }} />
        </div><Link href="/">โฆษณา Google Ads สายเทา</Link>
     <div className="image-container">
          <Image src="/GoogleAds/Google_Ads(9).jpg" alt="Facebook Ads" fill className="image" style={{ objectFit: 'cover' }} />
        </div><Link href="/">โฆษณา Google Ads สายเทา</Link>
     <div className="image-container">
          <Image src="/GoogleAds/Google_Ads(10).jpg" alt="Facebook Ads" fill className="image" style={{ objectFit: 'cover' }} />
        </div><Link href="/">โฆษณา Google Ads สายเทา</Link>
     <div className="image-container">
          <Image src="/GoogleAds/Google_Ads(11).jpg" alt="Facebook Ads" fill className="image" style={{ objectFit: 'cover' }} />
        </div><Link href="/">โฆษณา Google Ads สายเทา</Link>

</div>
  
   

    <style jsx>{`
        .image-container {
          position: relative;
          width: 100%;
          height: 0;
          padding-bottom: 56.25%; // สำหรับรูปภาพแบบ 16:9
        }
        .image {
          objectFit: cover;
        }
      `}</style>
    </>
  )
}
