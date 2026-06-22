const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface/80 backdrop-blur-md border-b border-white/5 shadow-sm">
      <div className="flex justify-between items-center px-gutter py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <img
            alt="Promptly Logo"
            className="h-8 w-8 object-contain"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAebqj0ocw-DbeK3pPtNRXI09HWEZksZv-FMHdTNCISUTbCjNBjtzD2WFaJ55XkvgV75-mIbpf9-gDIm9Y2659Z8LGEYJGdn_lH7jPwippHaBddLhPm1uGx9NK0-IonylHkCr5iAKkZw2GhUm_Q5Vmz5VCsP0pjZEKUNeNTTG9iI6PTT2sJ0r5q-Who4ey6etFBGujL7WRtqei03ekrB9OoF8-rmdY9QA0x5FTcWlVabsEn-y3c9M795tgxbADkafzo02KSh81lc58"
          />
          <span className="font-display-lg text-headline-md font-bold text-on-surface">
            Promptly
          </span>
        </div>
        <div className="hidden md:flex items-center gap-lg">
          <a
            className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-body-md text-body-md"
            href="#services"
          >
            Services
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-body-md text-body-md"
            href="#work"
          >
            Work
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-body-md text-body-md"
            href="#why"
          >
            Why Choose Us
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-body-md text-body-md"
            href="#process"
          >
            Process
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-body-md text-body-md"
            href="#faq"
          >
            FAQ
          </a>
        </div>
        <button className="bg-primary-container text-on-primary-container px-6 py-2 rounded-xl font-label-md text-label-md hover:scale-105 active:scale-95 transition-all">
          Book a Call
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
