const CustomAzuleFlake = ({ className }) => {
  return (
    <div className={className}>
      <svg viewBox="0 0 550 550" className="h-[100px] w-[100px]">
        <defs>
          <linearGradient id="MyGradient1">
            <stop offset="15%" stop-color="#60c50b" />
            <stop offset="85%" stop-color="#139a26" />
          </linearGradient>
        </defs>

        <path
          style={{ fill: "url(#MyGradient1)" }}
          d="M128 16v99.3l119 118.9V120.1L128 16zm256 0L265 120.1v114.1l119-119V16zM16 128l104 119h114.2L115.3 128H16zm380.8 0l-119 119h114.1l104-119h-99.1zM120 265L16 384h99.2l119-119H120zm157.8 0l119 119h99.1l-104-119H277.8zM247 277.8l-119 119V496l119-104.1V277.8zm18 0v114.1L384 496v-99.2l-119-119z"
        ></path>
      </svg>
    </div>
  );
};
export default CustomAzuleFlake;
