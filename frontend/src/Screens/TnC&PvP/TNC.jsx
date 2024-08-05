import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";

const TNC = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div id="terms">
        <h2 class="text-[30px] font-bold text-[#074D8D] text-center">
          TERMS OF USE
        </h2>
        <p class="p-4 text-[20px]">
          Welcome to the official website of the California Artificial
          Intelligence Institute (CalAI®) located at www.calai.org. By accessing
          or using this website, you agree to comply with and be bound by the
          following terms and conditions of use. These terms may be updated
          periodically, and it is recommended that you review them regularly.
          Your continued use of the website constitutes acceptance of any
          modifications made.
        </p>
      </div>
      <div id="content">
        <h3 class="text-[25px] font-bold text-[#074D8D] ml-4">COPYRIGHT:</h3>
        <p class="text-[18px] p-4">
          All content, materials, and functionalities available on this website,
          including but not limited to logos, text, graphics, and their
          arrangement, are the exclusive property of CalAI® and are protected by
          international copyright laws. Unless explicitly granted in writing by
          CalAI®, no rights are conferred upon users other than accessing,
          viewing, downloading, or printing content for personal and
          informational purposes. Reproduction, modification, transmission, or
          redistribution of any content without prior written permission from
          CalAI® is strictly prohibited.
        </p>
        <h3 class="text-[25px] font-bold text-[#074D8D] ml-4">TRADEMARKS:</h3>
        <p class="text-[18px] p-4">
          All trademarks, logos, designs, and other marks ("Marks") displayed on
          this website are the registered intellectual property of CalAI® and
          are protected by trademark laws. Users are prohibited from using these
          Marks for advertising, promotional, or other purposes that may cause
          confusion or damage the reputation of CalAI®. Any unauthorized use of
          these Marks is strictly prohibited and may result in legal action.
          Additionally, other trademarks visible on the website may belong to
          third parties unaffiliated with CalAI®, and their use without
          permission is strictly prohibited.
        </p>
        <h3 class="text-[25px] font-bold text-[#074D8D] ml-4">
          USE OF WEBSITE INFORMATION:
        </h3>
        <p class="text-[18px] p-4">
          Visitors to this website are granted a limited, non-exclusive right to
          access, download, and print content for personal, non-commercial use.
          However, users agree that all information and details obtained from
          the website shall be used solely for informational purposes and shall
          not be reproduced, altered, modified, transmitted, posted, or
          redistributed in any manner without explicit permission. All content
          on the CalAI® website is subject to copyright protection, and
          appropriate attribution is required for any use of such content.
        </p>
        <h3 class="text-[25px] font-bold text-[#074D8D] ml-4">
          USER POSTINGS:
        </h3>
        <p class="text-[18px] p-4">
          Users acknowledge that any information, views, opinions, or
          recommendations posted or published on the website are the
          responsibility of the respective authors and do not necessarily
          represent the views of CalAI®. CalAI® reserves the right to use,
          reproduce, or modify any user-posted content on its website. Users are
          prohibited from posting disrespectful, offensive, infringing, or
          misleading content, and CalAI® disclaims any liability for
          user-generated content while reserving the right to remove or edit
          such content.
        </p>
        <h3 class="text-[25px] font-bold text-[#074D8D] ml-4">
          WARRANTIES AND DISCLAIMERS:
        </h3>
        <p class="text-[18px] p-4">
          CalAI® provides the website and its content on an "as is" basis,
          without any warranties, express or implied, regarding accuracy,
          reliability, or suitability for any purpose. CalAI® does not guarantee
          that the website will meet users' requirements, be error-free, or that
          any errors will be corrected. Users access and use the website at
          their own risk, and CalAI® is not liable for any damage to computer
          systems or data loss resulting from the use of the website.
        </p>
        <h3 class="text-[25px] font-bold text-[#074D8D] ml-4">
          GOVERNING LAW:
        </h3>
        <p class="text-[18px] p-4">
          All disputes arising from the use of this website shall be governed by
          and construed in accordance with the laws of the United States of
          America and the State of California, without regard to conflicts
          of law principles.
        </p>
        <h3 class="text-[25px] font-bold text-[#074D8D] ml-4">
        NON-REFUNDABLE REGISTRATION FEE:
        </h3>
        <p class="text-[18px] p-4">
        The registration fee component of the course fees is non-refundable. This fee covers payment gateway charges (e.g., PayPal), LMS account creation charges, and application fees.
        </p>
        <h3 class="text-[25px] font-bold text-[#074D8D] ml-4">
        REFUND POLICY:
        </h3>
        <p class="text-[18px] p-4">
          Refunds can only be processed within 24 hours of receiving LMS credentials. After this period, the registration fee and course fees are non-refundable.
        </p>
        <h3 class="text-[25px] font-bold text-[#074D8D] ml-4">
        PAYMENT AND CREDENTIAL DELIVERY:
        </h3>
        <p class="text-[18px] p-4">
        Upon successful payment, Learning Management System (LMS) credentials will be delivered to your registered email address. Once you receive the credentials, you can begin your journey in the program.
        </p>
        <h3 class="text-[25px] font-bold text-[#074D8D] ml-4">
        COURSE DELIVERY METHOD:
        </h3>
        <p class="text-[18px] p-4">
        The course will be delivered using a drip-feed method. In this method, new modules will be released gradually, typically on a weekly basis. You will gain access to each subsequent module only after completing the previous one. This structured approach ensures optimal learning progression and allows for focused attention on each module's content.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default TNC;
