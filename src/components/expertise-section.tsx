"use client";

export default function ExpertiseSection() {
  return (
    <section className="py-20 bg-white z-10 relative px-8 text-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-roadRadio text-2xl md:text-7xl lg:text-8xl uppercase mb-16">
          <svg
            width="76"
            height="26"
            viewBox="0 0 53 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-[80px] w-[250px] md:h-[400px] md:w-[900px]"
          >
            <path
              d="M5.688 8.448C5.688 8.6 5.632 8.732 5.52 8.844C5.416 8.948 5.292 9 5.148 9H1.02C0.876 9 0.748 8.948 0.636 8.844C0.532 8.732 0.48 8.6 0.48 8.448V1.44C0.48 1.28 0.532 1.148 0.636 1.044C0.748 0.939999 0.876 0.887999 1.02 0.887999H5.148C5.292 0.887999 5.416 0.939999 5.52 1.044C5.632 1.148 5.688 1.28 5.688 1.44V1.764C5.688 1.916 5.632 2.048 5.52 2.16C5.416 2.264 5.292 2.316 5.148 2.316H2.052C1.956 2.316 1.908 2.368 1.908 2.472V4.068C1.908 4.18 1.956 4.236 2.052 4.236H4.716C4.876 4.236 5.008 4.288 5.112 4.392C5.216 4.496 5.268 4.624 5.268 4.776V5.112C5.268 5.264 5.216 5.396 5.112 5.508C5.008 5.612 4.876 5.664 4.716 5.664H2.052C1.956 5.664 1.908 5.712 1.908 5.808V7.428C1.908 7.532 1.956 7.584 2.052 7.584H5.148C5.292 7.584 5.416 7.636 5.52 7.74C5.632 7.844 5.688 7.976 5.688 8.136V8.448ZM11.7921 1.704L10.1241 4.8C10.0841 4.896 10.0841 4.988 10.1241 5.076L11.7921 8.196C11.8881 8.38 11.8841 8.56 11.7801 8.736C11.6681 8.912 11.5081 9 11.3001 9H10.9401C10.7081 9 10.5481 8.904 10.4601 8.712L9.32006 6.6C9.31206 6.568 9.28806 6.552 9.24806 6.552C9.21606 6.552 9.19206 6.568 9.17606 6.6L8.03606 8.712C8.00406 8.8 7.94006 8.872 7.84406 8.928C7.75606 8.976 7.66006 9 7.55606 9H7.18406C6.98406 9 6.82806 8.912 6.71606 8.736C6.61206 8.56 6.60806 8.38 6.70406 8.196L8.37206 5.076C8.41206 4.988 8.41206 4.896 8.37206 4.8L6.70406 1.704C6.60806 1.504 6.61206 1.32 6.71606 1.152C6.82806 0.975999 6.98406 0.887999 7.18406 0.887999H7.55606C7.77206 0.887999 7.93206 0.983999 8.03606 1.176L9.17606 3.3C9.19206 3.332 9.21606 3.348 9.24806 3.348C9.28006 3.348 9.30406 3.332 9.32006 3.3L10.4601 1.176C10.5641 0.983999 10.7241 0.887999 10.9401 0.887999H11.3121C11.5121 0.887999 11.6681 0.975999 11.7801 1.152C11.8841 1.32 11.8881 1.504 11.7921 1.704ZM18.1601 4.236C18.1601 4.524 18.0881 4.788 17.9441 5.028C17.8081 5.268 17.6201 5.46 17.3801 5.604C17.1401 5.748 16.8721 5.82 16.5761 5.82H14.3681C14.2721 5.82 14.2241 5.872 14.2241 5.976V8.448C14.2241 8.6 14.1681 8.732 14.0561 8.844C13.9521 8.948 13.8241 9 13.6721 9H13.3481C13.1961 9 13.0641 8.948 12.9521 8.844C12.8481 8.732 12.7961 8.6 12.7961 8.448V1.44C12.7961 1.28 12.8481 1.148 12.9521 1.044C13.0641 0.939999 13.1961 0.887999 13.3481 0.887999H16.5761C16.8721 0.887999 17.1401 0.959999 17.3801 1.104C17.6201 1.248 17.8081 1.44 17.9441 1.68C18.0881 1.92 18.1601 2.188 18.1601 2.484V4.236ZM16.7441 4.236V2.484C16.7441 2.372 16.6881 2.316 16.5761 2.316H14.3681C14.2721 2.316 14.2241 2.368 14.2241 2.472V4.236C14.2241 4.34 14.2721 4.392 14.3681 4.392H16.5761C16.6881 4.392 16.7441 4.34 16.7441 4.236ZM24.3325 8.448C24.3325 8.6 24.2765 8.732 24.1645 8.844C24.0605 8.948 23.9365 9 23.7925 9H19.6645C19.5205 9 19.3925 8.948 19.2805 8.844C19.1765 8.732 19.1245 8.6 19.1245 8.448V1.44C19.1245 1.28 19.1765 1.148 19.2805 1.044C19.3925 0.939999 19.5205 0.887999 19.6645 0.887999H23.7925C23.9365 0.887999 24.0605 0.939999 24.1645 1.044C24.2765 1.148 24.3325 1.28 24.3325 1.44V1.764C24.3325 1.916 24.2765 2.048 24.1645 2.16C24.0605 2.264 23.9365 2.316 23.7925 2.316H20.6965C20.6005 2.316 20.5525 2.368 20.5525 2.472V4.068C20.5525 4.18 20.6005 4.236 20.6965 4.236H23.3605C23.5205 4.236 23.6525 4.288 23.7565 4.392C23.8605 4.496 23.9125 4.624 23.9125 4.776V5.112C23.9125 5.264 23.8605 5.396 23.7565 5.508C23.6525 5.612 23.5205 5.664 23.3605 5.664H20.6965C20.6005 5.664 20.5525 5.712 20.5525 5.808V7.428C20.5525 7.532 20.6005 7.584 20.6965 7.584H23.7925C23.9365 7.584 24.0605 7.636 24.1645 7.74C24.2765 7.844 24.3325 7.976 24.3325 8.136V8.448ZM30.7246 8.244C30.8046 8.428 30.7926 8.596 30.6886 8.748C30.5686 8.916 30.4166 9 30.2326 9H29.8726C29.7686 9 29.6646 8.968 29.5606 8.904C29.4646 8.84 29.3966 8.76 29.3566 8.664L28.2286 5.964C28.1886 5.868 28.1166 5.82 28.0126 5.82H26.8966C26.7926 5.82 26.7406 5.872 26.7406 5.976V8.448C26.7406 8.6 26.6846 8.732 26.5726 8.844C26.4686 8.948 26.3406 9 26.1886 9H25.8526C25.7006 9 25.5726 8.948 25.4686 8.844C25.3726 8.732 25.3246 8.6 25.3246 8.448V1.44C25.3246 1.28 25.3726 1.148 25.4686 1.044C25.5726 0.939999 25.7006 0.887999 25.8526 0.887999H29.1046C29.3926 0.887999 29.6566 0.959999 29.8966 1.104C30.1366 1.248 30.3286 1.44 30.4726 1.68C30.6166 1.92 30.6886 2.188 30.6886 2.484V4.236C30.6886 4.548 30.6046 4.832 30.4366 5.088C30.2766 5.336 30.0646 5.528 29.8006 5.664C29.7686 5.672 29.7446 5.7 29.7286 5.748C29.7126 5.788 29.7166 5.828 29.7406 5.868L30.7246 8.244ZM29.2606 4.236V2.484C29.2606 2.372 29.2086 2.316 29.1046 2.316H26.8966C26.7926 2.316 26.7406 2.368 26.7406 2.472V4.236C26.7406 4.34 26.7926 4.392 26.8966 4.392H29.1046C29.2086 4.392 29.2606 4.34 29.2606 4.236ZM37.1093 1.764C37.1093 1.916 37.0573 2.048 36.9533 2.16C36.8493 2.264 36.7173 2.316 36.5573 2.316H35.2973C35.1933 2.316 35.1413 2.368 35.1413 2.472V8.448C35.1413 8.6 35.0853 8.732 34.9733 8.844C34.8693 8.948 34.7413 9 34.5893 9H34.2773C34.1253 9 33.9933 8.948 33.8813 8.844C33.7773 8.732 33.7253 8.6 33.7253 8.448V2.472C33.7253 2.368 33.6733 2.316 33.5693 2.316H32.2973C32.1453 2.316 32.0133 2.264 31.9013 2.16C31.7973 2.048 31.7453 1.916 31.7453 1.764V1.44C31.7453 1.28 31.7973 1.148 31.9013 1.044C32.0133 0.939999 32.1453 0.887999 32.2973 0.887999H36.5573C36.7173 0.887999 36.8493 0.939999 36.9533 1.044C37.0573 1.148 37.1093 1.28 37.1093 1.44V1.764ZM39.5138 8.448C39.5138 8.6 39.4578 8.732 39.3458 8.844C39.2418 8.948 39.1138 9 38.9618 9H38.6378C38.4858 9 38.3538 8.948 38.2418 8.844C38.1378 8.732 38.0858 8.6 38.0858 8.448V1.44C38.0858 1.28 38.1378 1.148 38.2418 1.044C38.3538 0.939999 38.4858 0.887999 38.6378 0.887999H38.9618C39.1138 0.887999 39.2418 0.939999 39.3458 1.044C39.4578 1.148 39.5138 1.28 39.5138 1.44V8.448ZM45.9838 7.416C45.9838 7.704 45.9118 7.968 45.7678 8.208C45.6238 8.448 45.4318 8.64 45.1918 8.784C44.9518 8.928 44.6878 9 44.3998 9H42.0958C41.8078 9 41.5398 8.928 41.2918 8.784C41.0518 8.64 40.8598 8.448 40.7158 8.208C40.5718 7.968 40.4998 7.704 40.4998 7.416V7.056C40.4998 6.904 40.5518 6.776 40.6558 6.672C40.7678 6.56 40.8998 6.504 41.0518 6.504H41.3878C41.5318 6.504 41.6558 6.56 41.7598 6.672C41.8718 6.776 41.9278 6.904 41.9278 7.056V7.416C41.9278 7.456 41.9438 7.496 41.9758 7.536C42.0158 7.568 42.0558 7.584 42.0958 7.584H44.3998C44.4398 7.584 44.4758 7.568 44.5078 7.536C44.5398 7.496 44.5558 7.456 44.5558 7.416V6.324C44.5558 6.236 44.5158 6.18 44.4358 6.156L41.5558 5.076C41.2358 4.964 40.9798 4.768 40.7878 4.488C40.5958 4.208 40.4998 3.9 40.4998 3.564V2.484C40.4998 2.188 40.5718 1.92 40.7158 1.68C40.8598 1.44 41.0518 1.248 41.2918 1.104C41.5398 0.959999 41.8078 0.887999 42.0958 0.887999H44.3998C44.6878 0.887999 44.9518 0.959999 45.1918 1.104C45.4318 1.248 45.6238 1.44 45.7678 1.68C45.9118 1.92 45.9838 2.188 45.9838 2.484V2.808C45.9838 2.96 45.9278 3.088 45.8158 3.192C45.7118 3.296 45.5838 3.348 45.4318 3.348H45.1078C44.9558 3.348 44.8238 3.296 44.7118 3.192C44.6078 3.088 44.5558 2.96 44.5558 2.808V2.484C44.5558 2.372 44.5038 2.316 44.3998 2.316H42.0958C42.0558 2.316 42.0158 2.332 41.9758 2.364C41.9438 2.396 41.9278 2.436 41.9278 2.484V3.564C41.9278 3.66 41.9678 3.72 42.0478 3.744L44.9398 4.824C45.2518 4.936 45.5038 5.132 45.6958 5.412C45.8878 5.692 45.9838 5.996 45.9838 6.324V7.416ZM52.1646 8.448C52.1646 8.6 52.1086 8.732 51.9966 8.844C51.8926 8.948 51.7686 9 51.6246 9H47.4966C47.3526 9 47.2246 8.948 47.1126 8.844C47.0086 8.732 46.9566 8.6 46.9566 8.448V1.44C46.9566 1.28 47.0086 1.148 47.1126 1.044C47.2246 0.939999 47.3526 0.887999 47.4966 0.887999H51.6246C51.7686 0.887999 51.8926 0.939999 51.9966 1.044C52.1086 1.148 52.1646 1.28 52.1646 1.44V1.764C52.1646 1.916 52.1086 2.048 51.9966 2.16C51.8926 2.264 51.7686 2.316 51.6246 2.316H48.5286C48.4326 2.316 48.3846 2.368 48.3846 2.472V4.068C48.3846 4.18 48.4326 4.236 48.5286 4.236H51.1926C51.3526 4.236 51.4846 4.288 51.5886 4.392C51.6926 4.496 51.7446 4.624 51.7446 4.776V5.112C51.7446 5.264 51.6926 5.396 51.5886 5.508C51.4846 5.612 51.3526 5.664 51.1926 5.664H48.5286C48.4326 5.664 48.3846 5.712 48.3846 5.808V7.428C48.3846 7.532 48.4326 7.584 48.5286 7.584H51.6246C51.7686 7.584 51.8926 7.636 51.9966 7.74C52.1086 7.844 52.1646 7.976 52.1646 8.136V8.448Z"
              fill=""
              className="expertise"
            />
          </svg>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 -mt-12 md:-mt-36">
          {/* Strategy */}
          <div>
            <h3 className="font-roadRadio text-xl uppercase mb-6">
              Strategy
            </h3>
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
            <h3 className="font-roadRadio text-xl uppercase mb-6">Customer Experience</h3>
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
            <h3 className="font-roadRadio text-xl uppercase mb-6">People Management</h3>
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
            <h3 className="font-roadRadio text-xl uppercase mb-6">Fundraising</h3>
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
