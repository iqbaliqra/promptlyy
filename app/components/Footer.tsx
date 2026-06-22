const Footer = () => {
  return (
    <footer className="bg-surface-container-lowest py-xl border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-md px-gutter max-w-7xl mx-auto">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-md">
            <img
              alt="Promptly Logo"
              className="h-8 w-8 object-contain"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAebqj0ocw-DbeK3pPtNRXI09HWEZksZv-FMHdTNCISUTbCjNBjtzD2WFaJ55XkvgV75-mIbpf9-gDIm9Y2659Z8LGEYJGdn_lH7jPwippHaBddLhPm1uGx9NK0-IonylHkCr5iAKkZw2GhUm_Q5Vmz5VCsP0pjZEKUNeNTTG9iI6PTT2sJ0r5q-Who4ey6etFBGujL7WRtqei03ekrB9OoF8-rmdY9QA0x5FTcWlVabsEn-y3c9M795tgxbADkafzo02KSh81lc58"
            />
            <span className="font-display-lg text-headline-md font-bold text-primary">
              Promptly
            </span>
          </div>
          <p className="text-on-surface-variant max-w-xs mb-lg">
            A premium AI &amp; Software Agency dedicated to high-performance
            implementation.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-on-surface mb-md">Links</h4>
          <ul className="space-y-sm text-on-surface-variant">
            <li>
              <a
                className="hover:text-secondary transition-colors"
                href="#services"
              >
                Services
              </a>
            </li>
            <li>
              <a className="hover:text-secondary transition-colors" href="#">
                Contact
              </a>
            </li>
            <li>
              <a className="hover:text-secondary transition-colors" href="#">
                LinkedIn
              </a>
            </li>
            <li>
              <a className="hover:text-secondary transition-colors" href="#">
                Email
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-on-surface mb-md">Legal</h4>
          <ul className="space-y-sm text-on-surface-variant">
            <li>
              <a className="hover:text-secondary transition-colors" href="#">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="hover:text-secondary transition-colors" href="#">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-gutter mt-xl pt-lg border-t border-white/5 text-center text-sm text-on-surface-variant">
        © 2024 Promptly AI Automation Agency. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
