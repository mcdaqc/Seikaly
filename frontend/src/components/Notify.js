const Notify = ({notify, setNotify}) => {
  const close = () => {
    setNotify(previousState => {
      return { ...previousState, msg: "" }
    });
  }

  return (
    <>
      {notify.msg !== '' ? 
      <div className="fixed inset-x-0 top-0 z-10">
        <div className={`relative ${ notify.type === 'success' ? 'bg-green-600' : (notify.type === 'error' ? 'bg-indigo-600' : 'bg-orange-600') } px-4 py-3 pr-14 text-white`}>
          <p className="text-left text-sm font-medium sm:text-center" dangerouslySetInnerHTML={{__html: notify.msg}}></p>
          <button
            aria-label="Close"
            className="absolute top-1/2 right-4 -translate-y-1/2 rounded-lg bg-black/10 p-1 transition hover:bg-black/20"
            onClick={() => close()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div> : '' }
    </>
  );
}

export default Notify;
