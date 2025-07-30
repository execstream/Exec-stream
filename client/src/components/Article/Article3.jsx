import React, { useEffect } from "react";

import MostPopular from "./MostPopular";

const Article = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="mx-auto px-6 md:px-20 py-10 text-gray-800">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:col-span-2">
          <h1 className="text-2xl md:text-5xl font-bold text-[#789BFF] mb-4">
            Cloud Misconfiguration is the New Malware
          </h1>
          <div className="text-sm text-gray-500 flex items-center space-x-4 mb-6">
            <span>July 9, 2025</span>
          </div>

          <div className="flex flex-wrap justify-center gap-10 mb-10">
            {[
              {
                name: "Shrikrishna Dikshit",
                designation:
                  "Partner (Digital & Cyber Security) \n Baker Tilly ASA India LLP",
                image: "/Shrikrishna Dikshit.jpg",
              },
              {
                name: "Rachit Shukla",
                designation:
                  "Executive Partner (Digital & Cyber Security) \n Baker Tilly ASA India LLP",
                image: "/Rachit Shukla.jpeg",
              },
            ].map((author, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center max-w-xs"
              >
                <img
                  src={author.image}
                  alt={author.name}
                  className="w-[200px] h-[200px] object-cover rounded-xl shadow-lg border border-gray-300"
                  onError={(e) =>
                    (e.currentTarget.src =
                      "https://via.placeholder.com/200?text=A")
                  }
                />
                <span className="text-xl font-bold mb-2">{author.name}</span>
                <span className="text-sm font-medium text-gray-500 mb-6 whitespace-pre-line">
                  {author.designation}
                </span>
              </div>
            ))}
          </div>

          <div className="flex gap-2 mb-8">
            <span className="bg-blue-100 text-[#789BFF] text-xs font-bold px-3 py-1 rounded">
              Infosec
            </span>
            <span className="bg-blue-100 text-[#789BFF] text-xs font-bold px-3 py-1 rounded">
              Cloud Misconfigurations
            </span>
          </div>

          <article className="prose max-w-none text-gray-700 [&>p]:text-sm [&>p]:mb-8">
            <p className="mb-8 text-sm">
              In today’s hyper-connected digital world, cloud computing is no
              longer optional—it’s the backbone of how modern businesses
              operate. It helps organizations scale faster, innovate more
              freely, and respond to customer needs with agility. But as
              companies race to embrace the cloud, many are overlooking a
              silent, but serious, threat: cloud misconfiguration.
            </p>

            <p className="mb-8 text-sm">
              Unlike traditional cyberattacks that involve malware or complex
              exploits, cloud misconfigurations often come down to simple human
              error—like leaving a storage bucket public or forgetting to update
              default access settings. These small oversights can open the door
              to massive security breaches. And unfortunately, they’re becoming
              more common.
            </p>

            <p className="mb-8 text-sm">
              Recent reports back this up. IBM’s 2024 X-Force Cloud Threat
              Landscape Report says that misconfigurations were behind 40% of
              cloud security incidents. Gartner predicts that by 2025, nearly
              all cloud security failures will be due to customer
              mistakes—especially poor configuration. The message is clear:
              people, not platforms, are often the weak link.
            </p>
            <p className="mb-8 text-sm">
              We’ve seen the real-world impact of these kinds of mistakes. Back
              in 2017, Viacom accidentally exposed internal credentials and
              system files through a misconfigured Amazon S3 bucket. Around the
              same time, Dow Jones leaked millions of customer records due to a
              similar error. These weren’t obscure companies—these were major
              enterprises with a lot on the line. The breaches happened quietly,
              but the damage was serious.
            </p>

            <p className="mb-8 text-sm">
              The financial fallout from cloud misconfigurations is steep, too.
              According to IBM’s 2024 Cost of a Data Breach Report,
              cloud-related breaches now cost organizations an average of $5.17
              million per incident. That’s on par with—if not higher than—the
              cost of dealing with sophisticated malware attacks. And beyond the
              dollars, there’s the loss of trust, potential fines from privacy
              laws like GDPR or CCPA, and the long- term hit to brand
              reputation.
            </p>
            <p className="mb-8 text-sm">
              What makes misconfigurations especially tricky is that they often
              fly under the radar. Like stealthy malware, they can sit unnoticed
              until an attacker finds and exploits them. As more organizations
              move into multi-cloud environments, managing settings and
              permissions becomes even more complex. The pressure to launch new
              services quickly can easily lead to shortcuts in security.
            </p>

            <p className="mb-8 text-sm">
              To get ahead of this, businesses need to take a proactive stance.
              Cloud providers take care of the infrastructure, but customers are
              responsible for securing how that infrastructure is used—a concept
              known as the shared responsibility model. This means building good
              configuration practices into everyday workflows: using automated
              tools to spot issues, reviewing permissions regularly, following
              least- privilege principles, and deploying Cloud Security Posture
              Management (CSPM) tools to catch problems early.
            </p>

            <p className="mb-8 text-sm">
              At the end of the day, cloud misconfiguration is a preventable
              risk—but only if it’s treated as seriously as malware.
              Organizations that build strong configuration hygiene into their
              security culture will be much better positioned to protect their
              data, avoid costly incidents, and keep customer trust intact. In
              today’s cloud-first world, that kind of diligence is no longer
              optional—it’s essential.
            </p>
            <div className="bg-gray-100 px-6 py-6 rounded-md shadow-sm mt-10">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Citations
              </h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                <li classname="text-sm">
                  <span className="font-medium">Viacom Data Leak:</span>{" "}
                  <a
                    href="https://securityaffairs.com/63201/data-breach/viacom-data-leak.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-blue-600 hover:text-blue-800"
                  >
                    Security Affairs
                  </a>
                </li>
                <li classname="text-sm">
                  <span className="font-medium">Dow Jones Data Exposure:</span>{" "}
                  <a
                    href="https://www.securityweek.com/millions-dow-jones-customer-records-exposed-online/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-blue-600 hover:text-blue-800"
                  >
                    SecurityWeek
                  </a>
                </li>
                <li classname="text-sm">
                  <span className="font-medium">Gartner Cloud Security:</span>{" "}
                  <a
                    href="https://www.gartner.com/smarterwithgartner/is-the-cloud-secure"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-blue-600 hover:text-blue-800"
                  >
                    Gartner
                  </a>
                </li>
              </ul>
            </div>
          </article>
        </div>

        <aside className="w-full md:w-[300px] flex-shrink-0 ">
          <MostPopular />
          <div className="bg-white rounded-lg p-4 shadow-md mt-10">
            <h3 className="text-lg font-bold mb-2">Subscribe Us</h3>
            <p className="text-sm text-gray-600 mb-3">
              Get Subscribe To Our Latest News & Update
            </p>
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-3 py-2 border border-gray-300 rounded mb-3 focus:outline-none"
            />
            <button className="w-full bg-[#789BFF] text-white py-2 rounded-full hover:bg-black">
              Subscribe
            </button>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Article;
