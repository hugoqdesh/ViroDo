import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Terms() {
  return (
    <main>
      <Header />

      <section className="flex flex-col gap-8 px-8 text-neutral-300 max-w-6xl mx-auto">
        <h1 className="mt-36 text-4xl font-bold text-brand-red-100 drop-shadow-red-glow">
          Terms of Service
        </h1>
        <div>
          <h3 className="my-4 text-lg font-bold text-white">
            Last updated and effective: June 20, 2024
          </h3>
          <h3 className="my-4 text-lg font-bold text-white">
            Agreement to Terms.
          </h3>
          <p>
            These terms of service (the &quot;Terms&quot;) apply to this
            website. By using our services, you agree to be bound by these Terms
            and any additional terms that may be provided by the Company. If you
            do not agree to these Terms, you may not use our services.
          </p>

          <h3 className="my-4 text-lg font-bold text-white">
            Age Restriction.
          </h3>
          <p>
            ViroDo is not intended for use by individuals under the age of 13.
            By using ViroDo, you represent and warrant that you are at least 13
            years of age. If you are under 13 years of age, you are not
            permitted to use the Site. If we become aware that a user is under
            the age of 13, we will take steps to terminate their access to the
            Site and delete any personal information collected from them, if
            applicable.
          </p>

          <h3 className="my-4 text-lg font-bold text-white">
            Intellectual property rights.
          </h3>
          <p>
            ViroDo and all content and software associated with the site,
            including but not limited to text, graphics, logos, and images, are
            the property of the Company and are protected by copyright and other
            intellectual property laws. You may not use any of these materials
            for any commercial purpose without the express written consent of
            the Company.
            <br />
            <br />
            Provided that you are eligible to use the Site, you are granted a
            limited license to access and use the Site and to download or print
            a copy of any portion of the Content to which you have properly
            gained access solely for your personal, non-commercial use. We
            reserve all rights not expressly granted to you in and to the Site,
            the Content and the Marks.
          </p>

          <h3 className="my-4 text-lg font-bold text-white">
            User representations.
          </h3>
          <p>
            By using the Site, you represent and warrant that: (1) you have the
            legal capacity and you agree to comply with these Terms of Use; (2)
            you are not a minor in the jurisdiction in which you reside; (3) you
            will not access the Site through automated or non-human means,
            whether through a bot, script or otherwise; (4) you will not use the
            Site for any illegal or unauthorized purpose; and (5) your use of
            the Site will not violate any applicable law or regulation.
            <br />
            <br />
            If you provide any information that is untrue, inaccurate, not
            current, or incomplete, we have the right to suspend or terminate
            your account and refuse any and all current or future use of the
            Site (or any portion thereof).
          </p>

          <h3 className="my-4 text-lg font-bold text-white">
            Warranty Disclaimer.
          </h3>
          <p>
            1. The site may experience downtime, errors, or technical issues
            beyond our control. We do not accept responsibility for any
            inconvenience, loss of data, or damages resulting from the site.{" "}
            <br />
            <br />
            2. Your use of this site is at your own risk. We disclaim all
            warranties, express or implied, including but not limited to
            warranties of merchantability, fitness for a particular purpose, and
            non-infringement.
            <br />
            <br />
            3. We reserve the right to modify, suspend, or terminate the use of
            our service at any time without prior notice.
            <br />
          </p>

          <h3 className="my-4 text-lg font-bold text-white">Products.</h3>
          <p>
            All products are subject to availability. We reserve the right to
            discontinue any products at any time for any reason. Prices for all
            products are subject to change.
          </p>

          <h3 className="my-4 text-lg font-bold text-white">
            Contribution licence.
          </h3>
          <p>
            You and Site agree that we may access, store, process, and use any
            information and personal data that you provide following the terms
            of the Privacy Policy and your choices (including settings).
            <br />
            <br />
            By submitting suggestions or other feedback regarding the Site, you
            agree that we can use and share such feedback for any purpose
            without compensation to you.
            <br />
            <br />
            We do not assert any ownership over your Contributions. You retain
            full ownership of all of your Contributions and any intellectual
            property rights or other proprietary rights associated with your
            Contributions. We are not liable for any statements or
            representations in your Contributions provided by you in any area on
            the Site. You are solely responsible for your Contributions to the
            Site and you expressly agree to exonerate us from any and all
            responsibility and to refrain from any legal action against us
            regarding your Contributions.
          </p>

          <h3 className="my-4 text-lg font-bold text-white">
            Term and Termination.
          </h3>
          <p>
            These Terms of Use shall remain in full force and effect while you
            use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE
            TERMS OF USE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND
            WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES
            AND THE MARKETPLACE OFFERINGS (INCLUDING BLOCKING CERTAIN IP
            ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING
            WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR
            COVENANT CONTAINED IN THESE TERMS OF USE OR OF ANY APPLICABLE LAW OR
            REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE
            SERVICES AND THE MARKETPLACE OFFERINGS OR DELETE ANY CONTENT OR
            INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR
            SOLE DISCRETION.
            <br />
            <br />
            If we terminate or suspend your account for any reason, you are
            prohibited from registering and creating a new account under your
            name, a fake or borrowed name, or the name of any third party, even
            if you may be acting on behalf of the third party. In addition to
            terminating or suspending your account, we reserve the right to take
            appropriate legal action, including without limitation pursuing
            civil, criminal, and injunctive redress.
          </p>

          <h3 className="my-4 text-lg font-bold text-white">
            Modifications and interruptions.
          </h3>
          <p>
            The company reserves the right to change, modify, or remove the
            contents of the Site at any time or for any reason at our sole
            discretion without notice. However, we have no obligation to update
            any information on our Site. We also reserve the right to modify or
            discontinue all or part of the Marketplace Offerings without notice
            at any time. We will not be liable to you or any third party for any
            modification, price change, suspension, or discontinuance of the
            Site or the Marketplace Offerings.
            <br />
            <br />
            We cannot guarantee the Site and the Marketplace Offerings will be
            available at all times. We may experience hardware, software, or
            other problems or need to perform maintenance related to the Site,
            resulting in interruptions, delays, or errors. We reserve the right
            to change, revise, update, suspend, discontinue, or otherwise modify
            the Site or the Marketplace Offerings at any time or for any reason
            without notice to you. You agree that we have no liability
            whatsoever for any loss, damage, or inconvenience caused by your
            inability to access or use the Site or the Marketplace Offerings
            during any downtime or discontinuance of the Site or the Marketplace
            Offerings. Nothing in these Terms of Use will be construed to
            obligate us to maintain and support the Site or the Marketplace
            Offerings or to supply any corrections, updates, or releases in
            connection therewith.
          </p>

          <h3 className="my-4 text-lg font-bold text-white">Disclaimer.</h3>
          <p>
            Our website is provided &quot;as is&quot; and &quot;as
            available&quot;, and the Company makes no warranties of any kind,
            express or implied, including but not limited to warranties of
            merchantability, fitness for a particular purpose, and
            non-infringement. The Company does not guarantee that Would You will
            be available at all times or that it will be error-free. In no event
            shall we be liable for any damages arising from the use of the
            Website. It is therefore recommended to use it only with the
            required permissions.
          </p>

          <h3 className="my-4 text-lg font-bold text-white">
            Limitation of Liability.
          </h3>
          <p>
            The Company will not be liable to you or any third party for any
            damages arising out of or in connection with your use of the
            Website, including but not limited to direct, indirect, incidental,
            consequential, and punitive damages.
          </p>

          <h3 className="my-4 text-lg font-bold text-white">Miscellaneous.</h3>
          <p>
            These Terms of Use and any policies or operating rules posted by us
            on the Site or in respect to the Site constitute the entire
            agreement and understanding between you and us. Our failure to
            exercise or enforce any right or provision of these Terms of Use
            shall not operate as a waiver of such right or provision. These
            Terms of Use operate to the fullest extent permissible by law. We
            may assign any or all of our rights and obligations to others at any
            time. We shall not be responsible or liable for any loss, damage,
            delay, or failure to act caused by any cause beyond our reasonable
            control. If any provision or part of a provision of these Terms of
            Use is determined to be unlawful, void, or unenforceable, that
            provision or part of the provision is deemed severable from these
            Terms of Use and does not affect the validity and enforceability of
            any remaining provisions. There is no joint venture, partnership,
            employment or agency relationship created between you and us as a
            result of these Terms of Use or use of the Site. You agree that
            these Terms of Use will not be construed against us by virtue of
            having drafted them. You hereby waive any and all defenses you may
            have based on the electronic form of these Terms of Use and the lack
            of signing by the parties hereto to execute these Terms of Use.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
