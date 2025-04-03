"use client";

export default function ExpertiseSection() {
  return (
    <section className="py-20 bg-white z-10 relative px-8 text-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-roadRadio text-2xl md:text-7xl lg:text-8xl uppercase mb-16">
          <svg
            width="58"
            height="10"
            viewBox="0 0 58 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-[80px] w-[250px] md:h-[300px] md:w-[700px]"
          >
            <path
              d="M0.78 9C0.78 7.656 0.78 6.296 0.78 4.92C0.78 3.544 0.78 2.184 0.78 0.84C1.588 0.84 2.404 0.84 3.228 0.84C4.052 0.84 4.868 0.84 5.676 0.84C5.676 1.144 5.676 1.456 5.676 1.776C5.676 2.096 5.676 2.408 5.676 2.712C5.212 2.712 4.744 2.712 4.272 2.712C3.808 2.712 3.344 2.712 2.88 2.712C2.88 2.912 2.88 3.112 2.88 3.312C2.88 3.504 2.88 3.7 2.88 3.9C3.304 3.9 3.732 3.9 4.164 3.9C4.596 3.9 5.02 3.9 5.436 3.9C5.436 4.196 5.436 4.496 5.436 4.8C5.436 5.104 5.436 5.408 5.436 5.712C5.02 5.712 4.596 5.712 4.164 5.712C3.732 5.712 3.304 5.712 2.88 5.712C2.88 5.944 2.88 6.18 2.88 6.42C2.88 6.66 2.88 6.896 2.88 7.128C3.344 7.128 3.808 7.128 4.272 7.128C4.744 7.128 5.212 7.128 5.676 7.128C5.676 7.432 5.676 7.744 5.676 8.064C5.676 8.384 5.676 8.696 5.676 9C4.868 9 4.052 9 3.228 9C2.404 9 1.588 9 0.78 9ZM6.55584 0.84C6.94784 0.84 7.33984 0.84 7.73184 0.84C8.13184 0.84 8.52784 0.84 8.91984 0.84C9.14384 1.216 9.36784 1.6 9.59184 1.992C9.81584 2.376 10.0398 2.756 10.2638 3.132C10.4878 2.756 10.7118 2.376 10.9358 1.992C11.1598 1.6 11.3838 1.216 11.6078 0.84C11.9918 0.84 12.3798 0.84 12.7718 0.84C13.1638 0.84 13.5518 0.84 13.9358 0.84C13.5438 1.488 13.1478 2.144 12.7478 2.808C12.3558 3.472 11.9638 4.128 11.5718 4.776C11.9798 5.472 12.3918 6.176 12.8078 6.888C13.2318 7.6 13.6478 8.304 14.0558 9C13.6638 9 13.2678 9 12.8678 9C12.4758 9 12.0838 9 11.6918 9C11.4518 8.576 11.2078 8.152 10.9598 7.728C10.7118 7.296 10.4678 6.872 10.2278 6.456C9.97984 6.872 9.72784 7.296 9.47184 7.728C9.22384 8.152 8.97584 8.576 8.72784 9C8.34384 9 7.95584 9 7.56384 9C7.17184 9 6.78384 9 6.39984 9C6.81584 8.312 7.23184 7.616 7.64784 6.912C8.07184 6.2 8.49184 5.5 8.90784 4.812C8.51584 4.156 8.12384 3.496 7.73184 2.832C7.33984 2.16 6.94784 1.496 6.55584 0.84ZM14.9011 9C14.9011 7.656 14.9011 6.296 14.9011 4.92C14.9011 3.544 14.9011 2.184 14.9011 0.84C15.3971 0.84 15.8931 0.84 16.3891 0.84C16.8931 0.84 17.3891 0.84 17.8771 0.84C18.4931 0.84 19.0291 0.96 19.4851 1.2C19.9411 1.432 20.2971 1.76 20.5531 2.184C20.8091 2.608 20.9371 3.104 20.9371 3.672C20.9371 4.232 20.8091 4.724 20.5531 5.148C20.3051 5.572 19.9611 5.9 19.5211 6.132C19.0891 6.364 18.5971 6.48 18.0451 6.48C17.8691 6.48 17.6931 6.48 17.5171 6.48C17.3491 6.48 17.1771 6.48 17.0011 6.48C17.0011 6.896 17.0011 7.316 17.0011 7.74C17.0011 8.164 17.0011 8.584 17.0011 9C16.6571 9 16.3091 9 15.9571 9C15.6051 9 15.2531 9 14.9011 9ZM17.8771 2.724C17.7331 2.724 17.5851 2.724 17.4331 2.724C17.2891 2.724 17.1451 2.724 17.0011 2.724C17.0011 3.044 17.0011 3.368 17.0011 3.696C17.0011 4.016 17.0011 4.336 17.0011 4.656C17.1611 4.656 17.3251 4.656 17.4931 4.656C17.6691 4.656 17.8371 4.656 17.9971 4.656C18.2451 4.656 18.4451 4.564 18.5971 4.38C18.7571 4.196 18.8371 3.968 18.8371 3.696C18.8371 3.416 18.7531 3.184 18.5851 3C18.4171 2.816 18.1811 2.724 17.8771 2.724ZM22.0144 9C22.0144 7.656 22.0144 6.296 22.0144 4.92C22.0144 3.544 22.0144 2.184 22.0144 0.84C22.8224 0.84 23.6384 0.84 24.4624 0.84C25.2864 0.84 26.1024 0.84 26.9104 0.84C26.9104 1.144 26.9104 1.456 26.9104 1.776C26.9104 2.096 26.9104 2.408 26.9104 2.712C26.4464 2.712 25.9784 2.712 25.5064 2.712C25.0424 2.712 24.5784 2.712 24.1144 2.712C24.1144 2.912 24.1144 3.112 24.1144 3.312C24.1144 3.504 24.1144 3.7 24.1144 3.9C24.5384 3.9 24.9664 3.9 25.3984 3.9C25.8304 3.9 26.2544 3.9 26.6704 3.9C26.6704 4.196 26.6704 4.496 26.6704 4.8C26.6704 5.104 26.6704 5.408 26.6704 5.712C26.2544 5.712 25.8304 5.712 25.3984 5.712C24.9664 5.712 24.5384 5.712 24.1144 5.712C24.1144 5.944 24.1144 6.18 24.1144 6.42C24.1144 6.66 24.1144 6.896 24.1144 7.128C24.5784 7.128 25.0424 7.128 25.5064 7.128C25.9784 7.128 26.4464 7.128 26.9104 7.128C26.9104 7.432 26.9104 7.744 26.9104 8.064C26.9104 8.384 26.9104 8.696 26.9104 9C26.1024 9 25.2864 9 24.4624 9C23.6384 9 22.8224 9 22.0144 9ZM28.3542 9C28.3542 7.656 28.3542 6.296 28.3542 4.92C28.3542 3.544 28.3542 2.184 28.3542 0.84C28.8342 0.84 29.3142 0.84 29.7942 0.84C30.2822 0.84 30.7662 0.84 31.2462 0.84C31.8542 0.84 32.3862 0.956 32.8422 1.188C33.2982 1.412 33.6502 1.732 33.8982 2.148C34.1542 2.556 34.2822 3.036 34.2822 3.588C34.2822 4.06 34.1862 4.48 33.9942 4.848C33.8022 5.216 33.5422 5.516 33.2142 5.748C33.5342 6.284 33.8542 6.828 34.1742 7.38C34.5022 7.924 34.8262 8.464 35.1462 9C34.7542 9 34.3622 9 33.9702 9C33.5782 9 33.1862 9 32.7942 9C32.5462 8.552 32.2942 8.096 32.0382 7.632C31.7902 7.168 31.5382 6.712 31.2822 6.264C31.1462 6.264 31.0062 6.264 30.8622 6.264C30.7262 6.264 30.5902 6.264 30.4542 6.264C30.4542 6.712 30.4542 7.168 30.4542 7.632C30.4542 8.096 30.4542 8.552 30.4542 9C30.1102 9 29.7622 9 29.4102 9C29.0582 9 28.7062 9 28.3542 9ZM31.2462 2.736C31.1182 2.736 30.9862 2.736 30.8502 2.736C30.7222 2.736 30.5902 2.736 30.4542 2.736C30.4542 3.032 30.4542 3.328 30.4542 3.624C30.4542 3.92 30.4542 4.216 30.4542 4.512C30.6062 4.512 30.7582 4.512 30.9102 4.512C31.0622 4.512 31.2142 4.512 31.3662 4.512C31.6062 4.512 31.8022 4.428 31.9542 4.26C32.1062 4.084 32.1822 3.872 32.1822 3.624C32.1822 3.368 32.0982 3.156 31.9302 2.988C31.7702 2.82 31.5422 2.736 31.2462 2.736ZM37.0596 9C37.0596 7.968 37.0596 6.928 37.0596 5.88C37.0596 4.824 37.0596 3.78 37.0596 2.748C36.7556 2.748 36.4476 2.748 36.1356 2.748C35.8236 2.748 35.5156 2.748 35.2116 2.748C35.2116 2.436 35.2116 2.12 35.2116 1.8C35.2116 1.472 35.2116 1.152 35.2116 0.84C36.1636 0.84 37.1276 0.84 38.1036 0.84C39.0796 0.84 40.0436 0.84 40.9956 0.84C40.9956 1.152 40.9956 1.472 40.9956 1.8C40.9956 2.12 40.9956 2.436 40.9956 2.748C40.6996 2.748 40.3956 2.748 40.0836 2.748C39.7716 2.748 39.4636 2.748 39.1596 2.748C39.1596 3.78 39.1596 4.824 39.1596 5.88C39.1596 6.928 39.1596 7.968 39.1596 9C38.8156 9 38.4676 9 38.1156 9C37.7636 9 37.4116 9 37.0596 9ZM42.1955 9C42.1955 7.656 42.1955 6.296 42.1955 4.92C42.1955 3.544 42.1955 2.184 42.1955 0.84C42.5475 0.84 42.8995 0.84 43.2515 0.84C43.6035 0.84 43.9515 0.84 44.2955 0.84C44.2955 2.184 44.2955 3.544 44.2955 4.92C44.2955 6.296 44.2955 7.656 44.2955 9C43.9515 9 43.6035 9 43.2515 9C42.8995 9 42.5475 9 42.1955 9ZM51.2846 6.54C51.2846 7.148 51.1246 7.644 50.8046 8.028C50.4926 8.404 50.0686 8.676 49.5326 8.844C49.0046 9.012 48.4126 9.084 47.7566 9.06C47.1006 9.044 46.4326 8.944 45.7526 8.76C45.7526 8.416 45.7526 8.072 45.7526 7.728C45.7526 7.384 45.7526 7.04 45.7526 6.696C46.3766 6.92 46.9446 7.06 47.4566 7.116C47.9686 7.172 48.3766 7.152 48.6806 7.056C48.9846 6.952 49.1366 6.78 49.1366 6.54C49.1366 6.372 49.0526 6.236 48.8846 6.132C48.7166 6.02 48.4966 5.92 48.2246 5.832C47.9606 5.744 47.6806 5.644 47.3846 5.532C47.0886 5.412 46.8046 5.264 46.5326 5.088C46.2686 4.904 46.0526 4.668 45.8846 4.38C45.7166 4.084 45.6326 3.716 45.6326 3.276C45.6326 2.732 45.7766 2.272 46.0646 1.896C46.3526 1.52 46.7406 1.236 47.2286 1.044C47.7246 0.852 48.2846 0.756 48.9086 0.756C49.5406 0.756 50.1926 0.852 50.8646 1.044C50.8646 1.388 50.8646 1.732 50.8646 2.076C50.8646 2.42 50.8646 2.764 50.8646 3.108C50.3046 2.868 49.7886 2.724 49.3166 2.676C48.8526 2.62 48.4806 2.644 48.2006 2.748C47.9206 2.844 47.7806 3.004 47.7806 3.228C47.7806 3.388 47.8646 3.52 48.0326 3.624C48.2006 3.728 48.4166 3.824 48.6806 3.912C48.9526 3.992 49.2366 4.092 49.5326 4.212C49.8286 4.324 50.1086 4.476 50.3726 4.668C50.6446 4.852 50.8646 5.096 51.0326 5.4C51.2006 5.696 51.2846 6.076 51.2846 6.54ZM52.3777 9C52.3777 7.656 52.3777 6.296 52.3777 4.92C52.3777 3.544 52.3777 2.184 52.3777 0.84C53.1857 0.84 54.0017 0.84 54.8257 0.84C55.6497 0.84 56.4657 0.84 57.2737 0.84C57.2737 1.144 57.2737 1.456 57.2737 1.776C57.2737 2.096 57.2737 2.408 57.2737 2.712C56.8097 2.712 56.3417 2.712 55.8697 2.712C55.4057 2.712 54.9417 2.712 54.4777 2.712C54.4777 2.912 54.4777 3.112 54.4777 3.312C54.4777 3.504 54.4777 3.7 54.4777 3.9C54.9017 3.9 55.3297 3.9 55.7617 3.9C56.1937 3.9 56.6177 3.9 57.0337 3.9C57.0337 4.196 57.0337 4.496 57.0337 4.8C57.0337 5.104 57.0337 5.408 57.0337 5.712C56.6177 5.712 56.1937 5.712 55.7617 5.712C55.3297 5.712 54.9017 5.712 54.4777 5.712C54.4777 5.944 54.4777 6.18 54.4777 6.42C54.4777 6.66 54.4777 6.896 54.4777 7.128C54.9417 7.128 55.4057 7.128 55.8697 7.128C56.3417 7.128 56.8097 7.128 57.2737 7.128C57.2737 7.432 57.2737 7.744 57.2737 8.064C57.2737 8.384 57.2737 8.696 57.2737 9C56.4657 9 55.6497 9 54.8257 9C54.0017 9 53.1857 9 52.3777 9Z"
              className="expertise"
            />
          </svg>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 -mt-12 md:-mt-36">
          {/* Strategy */}
          <div>
            <h3 className="font-roadRadio text-xl uppercase mb-6">Strategy</h3>
            <p className="text-base mb-6">
              Strategy is the underlying foundation of every great brand
              experience. Strategy that is centered on clarifying a brand's
              message to inform their decisions and shape their actions.
            </p>

            <ul className="space-y-2 uppercase text-xs">
              <li>Research & Analysis</li>
              <li>Trend & Insight</li>
              <li>Customer Experience</li>
              <li>Brand Platform & Positioning</li>
              <li>Go-to-market Planning</li>
              <li>Content & Messaging</li>
            </ul>
          </div>

          {/* Design */}
          <div>
            <h3 className="font-roadRadio text-xl uppercase mb-6">
              Customer Experience
            </h3>
            <p className="text-base mb-6">
              From voice to tone to style, every expression matters. Brand
              design shapes a brand experience by creating identity touchpoints
              from design systems to key messages.
            </p>

            <ul className="space-y-2 uppercase text-xs">
              <li>Brand Identity</li>
              <li>Visual Language</li>
              <li>Packaging Design</li>
              <li>Brand Campaign</li>
              <li>Signature Assets</li>
              <li>Brand Guidelines</li>
            </ul>
          </div>

          {/* Digital */}
          <div>
            <h3 className="font-roadRadio text-xl uppercase mb-6">
              People Management
            </h3>
            <p className="text-base mb-6">
              Creative functionality with intuitive design makes every
              interaction more meaningful. Embracing digital as an extension of
              the physical brand has the power to elevate the experience.
            </p>

            <ul className="space-y-2 uppercase text-xs">
              <li>Front End Web Design</li>
              <li>UI Design</li>
              <li>UX Strategy</li>
              <li>App Design</li>
              <li>CMS Integrations</li>
              <li>Digital Advertising</li>
            </ul>
          </div>
          <div>
            <h3 className="font-roadRadio text-xl uppercase mb-6">
              Fundraising
            </h3>
            <p className="text-base mb-6">
              Creative functionality with intuitive design makes every
              interaction more meaningful. Embracing digital as an extension of
              the physical brand has the power to elevate the experience.
            </p>

            <ul className="space-y-2 uppercase text-xs">
              <li>Front End Web Design</li>
              <li>UI Design</li>
              <li>UX Strategy</li>
              <li>App Design</li>
              <li>CMS Integrations</li>
              <li>Digital Advertising</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
