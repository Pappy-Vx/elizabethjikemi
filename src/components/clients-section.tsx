"use client";

export default function ClientsSection() {
  return (
    <section className="py-20 bg-[#000000CC] relative z-10 px-8 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-roadRadio text-2xl md:text-7xl lg:text-8xl uppercase mb-16 ">
          <svg
            width="48"
            height="10"
            viewBox="0 0 48 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-[80px] w-[250px] md:h-[200px] md:w-[500px]"
          >
            <path
              d="M0 9C0.416 7.656 0.832 6.296 1.248 4.92C1.672 3.544 2.092 2.184 2.508 0.84C2.98 0.84 3.456 0.84 3.936 0.84C4.424 0.84 4.904 0.84 5.376 0.84C5.792 2.184 6.208 3.544 6.624 4.92C7.048 6.296 7.468 7.656 7.884 9C7.54 9 7.188 9 6.828 9C6.476 9 6.124 9 5.772 9C5.692 8.744 5.616 8.488 5.544 8.232C5.472 7.968 5.396 7.708 5.316 7.452C4.86 7.452 4.4 7.452 3.936 7.452C3.48 7.452 3.024 7.452 2.568 7.452C2.488 7.708 2.412 7.968 2.34 8.232C2.268 8.488 2.192 8.744 2.112 9C1.768 9 1.416 9 1.056 9C0.704 9 0.352 9 0 9ZM3.096 5.664C3.376 5.664 3.656 5.664 3.936 5.664C4.224 5.664 4.508 5.664 4.788 5.664C4.652 5.192 4.512 4.716 4.368 4.236C4.224 3.756 4.084 3.28 3.948 2.808C3.812 3.28 3.668 3.756 3.516 4.236C3.372 4.716 3.232 5.192 3.096 5.664ZM9.90834 0.84C10.0923 1.664 10.2763 2.5 10.4603 3.348C10.6443 4.196 10.8243 5.036 11.0003 5.868C11.1843 5.036 11.3683 4.196 11.5523 3.348C11.7443 2.5 11.9283 1.664 12.1043 0.84C12.4163 0.84 12.7323 0.84 13.0523 0.84C13.3723 0.84 13.6883 0.84 14.0003 0.84C14.1923 1.664 14.3843 2.496 14.5763 3.336C14.7683 4.176 14.9603 5.012 15.1523 5.844C15.3363 5.012 15.5163 4.176 15.6923 3.336C15.8763 2.496 16.0563 1.664 16.2323 0.84C16.5523 0.84 16.8723 0.84 17.1923 0.84C17.5203 0.84 17.8443 0.84 18.1643 0.84C17.8683 2.184 17.5723 3.544 17.2763 4.92C16.9803 6.296 16.6843 7.656 16.3883 9C15.9963 9 15.5963 9 15.1883 9C14.7883 9 14.3883 9 13.9883 9C13.8203 8.256 13.6483 7.508 13.4723 6.756C13.2963 5.996 13.1243 5.244 12.9563 4.5C12.7963 5.244 12.6323 5.996 12.4643 6.756C12.2963 7.508 12.1323 8.256 11.9723 9C11.5803 9 11.1843 9 10.7843 9C10.3923 9 10.0003 9 9.60834 9C9.31234 7.656 9.01634 6.296 8.72034 4.92C8.42434 3.544 8.12834 2.184 7.83234 0.84C8.17634 0.84 8.52034 0.84 8.86434 0.84C9.21634 0.84 9.56434 0.84 9.90834 0.84ZM18.1055 9C18.5215 7.656 18.9375 6.296 19.3535 4.92C19.7775 3.544 20.1975 2.184 20.6135 0.84C21.0855 0.84 21.5615 0.84 22.0415 0.84C22.5295 0.84 23.0095 0.84 23.4815 0.84C23.8975 2.184 24.3135 3.544 24.7295 4.92C25.1535 6.296 25.5735 7.656 25.9895 9C25.6455 9 25.2935 9 24.9335 9C24.5815 9 24.2295 9 23.8775 9C23.7975 8.744 23.7215 8.488 23.6495 8.232C23.5775 7.968 23.5015 7.708 23.4215 7.452C22.9655 7.452 22.5055 7.452 22.0415 7.452C21.5855 7.452 21.1295 7.452 20.6735 7.452C20.5935 7.708 20.5175 7.968 20.4455 8.232C20.3735 8.488 20.2975 8.744 20.2175 9C19.8735 9 19.5215 9 19.1615 9C18.8095 9 18.4575 9 18.1055 9ZM21.2015 5.664C21.4815 5.664 21.7615 5.664 22.0415 5.664C22.3295 5.664 22.6135 5.664 22.8935 5.664C22.7575 5.192 22.6175 4.716 22.4735 4.236C22.3295 3.756 22.1895 3.28 22.0535 2.808C21.9175 3.28 21.7735 3.756 21.6215 4.236C21.4775 4.716 21.3375 5.192 21.2015 5.664ZM26.7722 9C26.7722 7.656 26.7722 6.296 26.7722 4.92C26.7722 3.544 26.7722 2.184 26.7722 0.84C27.2522 0.84 27.7322 0.84 28.2122 0.84C28.7002 0.84 29.1842 0.84 29.6642 0.84C30.2722 0.84 30.8042 0.956 31.2602 1.188C31.7162 1.412 32.0682 1.732 32.3162 2.148C32.5722 2.556 32.7002 3.036 32.7002 3.588C32.7002 4.06 32.6042 4.48 32.4122 4.848C32.2202 5.216 31.9602 5.516 31.6322 5.748C31.9522 6.284 32.2722 6.828 32.5922 7.38C32.9202 7.924 33.2442 8.464 33.5642 9C33.1722 9 32.7802 9 32.3882 9C31.9962 9 31.6042 9 31.2122 9C30.9642 8.552 30.7122 8.096 30.4562 7.632C30.2082 7.168 29.9562 6.712 29.7002 6.264C29.5642 6.264 29.4242 6.264 29.2802 6.264C29.1442 6.264 29.0082 6.264 28.8722 6.264C28.8722 6.712 28.8722 7.168 28.8722 7.632C28.8722 8.096 28.8722 8.552 28.8722 9C28.5282 9 28.1802 9 27.8282 9C27.4762 9 27.1242 9 26.7722 9ZM29.6642 2.736C29.5362 2.736 29.4042 2.736 29.2682 2.736C29.1402 2.736 29.0082 2.736 28.8722 2.736C28.8722 3.032 28.8722 3.328 28.8722 3.624C28.8722 3.92 28.8722 4.216 28.8722 4.512C29.0242 4.512 29.1762 4.512 29.3282 4.512C29.4802 4.512 29.6322 4.512 29.7842 4.512C30.0242 4.512 30.2202 4.428 30.3722 4.26C30.5242 4.084 30.6002 3.872 30.6002 3.624C30.6002 3.368 30.5162 3.156 30.3482 2.988C30.1882 2.82 29.9602 2.736 29.6642 2.736ZM34.2839 9C34.2839 7.656 34.2839 6.296 34.2839 4.92C34.2839 3.544 34.2839 2.184 34.2839 0.84C34.7639 0.84 35.2479 0.84 35.7359 0.84C36.2239 0.84 36.7079 0.84 37.1879 0.84C37.7799 0.84 38.3239 0.944 38.8199 1.152C39.3159 1.352 39.7479 1.636 40.1159 2.004C40.4839 2.372 40.7679 2.804 40.9679 3.3C41.1759 3.788 41.2799 4.324 41.2799 4.908C41.2799 5.492 41.1759 6.032 40.9679 6.528C40.7679 7.024 40.4839 7.46 40.1159 7.836C39.7479 8.204 39.3159 8.492 38.8199 8.7C38.3239 8.9 37.7799 9 37.1879 9C36.7079 9 36.2239 9 35.7359 9C35.2479 9 34.7639 9 34.2839 9ZM37.1879 2.736C37.0599 2.736 36.9279 2.736 36.7919 2.736C36.6559 2.736 36.5199 2.736 36.3839 2.736C36.3839 3.456 36.3839 4.184 36.3839 4.92C36.3839 5.656 36.3839 6.384 36.3839 7.104C36.5199 7.104 36.6559 7.104 36.7919 7.104C36.9279 7.104 37.0599 7.104 37.1879 7.104C37.5879 7.104 37.9359 7.008 38.2319 6.816C38.5279 6.624 38.7559 6.364 38.9159 6.036C39.0759 5.7 39.1559 5.324 39.1559 4.908C39.1559 4.492 39.0759 4.12 38.9159 3.792C38.7559 3.464 38.5279 3.208 38.2319 3.024C37.9359 2.832 37.5879 2.736 37.1879 2.736ZM47.7338 6.54C47.7338 7.148 47.5738 7.644 47.2538 8.028C46.9418 8.404 46.5178 8.676 45.9818 8.844C45.4538 9.012 44.8618 9.084 44.2058 9.06C43.5498 9.044 42.8818 8.944 42.2018 8.76C42.2018 8.416 42.2018 8.072 42.2018 7.728C42.2018 7.384 42.2018 7.04 42.2018 6.696C42.8258 6.92 43.3938 7.06 43.9058 7.116C44.4178 7.172 44.8258 7.152 45.1298 7.056C45.4338 6.952 45.5858 6.78 45.5858 6.54C45.5858 6.372 45.5018 6.236 45.3338 6.132C45.1658 6.02 44.9458 5.92 44.6738 5.832C44.4098 5.744 44.1298 5.644 43.8338 5.532C43.5378 5.412 43.2538 5.264 42.9818 5.088C42.7178 4.904 42.5018 4.668 42.3338 4.38C42.1658 4.084 42.0818 3.716 42.0818 3.276C42.0818 2.732 42.2258 2.272 42.5138 1.896C42.8018 1.52 43.1898 1.236 43.6778 1.044C44.1738 0.852 44.7338 0.756 45.3578 0.756C45.9898 0.756 46.6418 0.852 47.3138 1.044C47.3138 1.388 47.3138 1.732 47.3138 2.076C47.3138 2.42 47.3138 2.764 47.3138 3.108C46.7538 2.868 46.2378 2.724 45.7658 2.676C45.3018 2.62 44.9298 2.644 44.6498 2.748C44.3698 2.844 44.2298 3.004 44.2298 3.228C44.2298 3.388 44.3138 3.52 44.4818 3.624C44.6498 3.728 44.8658 3.824 45.1298 3.912C45.4018 3.992 45.6858 4.092 45.9818 4.212C46.2778 4.324 46.5578 4.476 46.8218 4.668C47.0938 4.852 47.3138 5.096 47.4818 5.4C47.6498 5.696 47.7338 6.076 47.7338 6.54Z"
              className="award"
            />
          </svg>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {/* Client logos - adding a few examples */}
          <div className="h-8 w-full flex items-center justify-center">
            <div className="text-center text-xs opacity-70">ESPN</div>
          </div>

          <div className="h-8 w-full flex items-center justify-center">
            <div className="text-center text-xs opacity-70">FOX</div>
          </div>

          <div className="h-8 w-full flex items-center justify-center">
            <div className="text-center text-xs opacity-70">ABC</div>
          </div>

          <div className="h-8 w-full flex items-center justify-center">
            <div className="text-center text-xs opacity-70">AC HOTELS</div>
          </div>

          <div className="h-8 w-full flex items-center justify-center">
            <div className="text-center text-xs opacity-70">LAFC</div>
          </div>

          <div className="h-8 w-full flex items-center justify-center">
            <div className="text-center text-xs opacity-70">MOTIV</div>
          </div>

          <div className="h-8 w-full flex items-center justify-center">
            <div className="text-center text-xs opacity-70">NESTEA</div>
          </div>

          <div className="h-8 w-full flex items-center justify-center">
            <div className="text-center text-xs opacity-70">TOYOTA</div>
          </div>

          <div className="h-8 w-full flex items-center justify-center">
            <div className="text-center text-xs opacity-70">TMZ</div>
          </div>

          <div className="h-8 w-full flex items-center justify-center">
            <div className="text-center text-xs opacity-70">AMC</div>
          </div>

          <div className="h-8 w-full flex items-center justify-center">
            <div className="text-center text-xs opacity-70">SOTHEBY'S</div>
          </div>

          <div className="h-8 w-full flex items-center justify-center">
            <div className="text-center text-xs opacity-70">DIRECTV</div>
          </div>
        </div>
      </div>
    </section>
  );
}
