export default function Page() {
  return (
    <div className="flex gap-3">
      <button className="
        px-11 py-9 bg-neutral-950/75 rounded-xl text-sm text-neutral-300 font-medium tracking-wider transition-all duration-300
        hover:text-white
        dark:hover:text-white dark:bg-neutral-700 dark:text-neutral-300
      ">
        Hello world
      </button>
      <button className="
        px-11 py-9 rounded-xl text-sm text-neutral-400 font-medium tracking-wider shadow-lg shadow-neutral-200 transition-all duration-300
        hover:shadow hover:text-neutral-500
        dark:shadow-neutral-700 dark:hover:shadow dark:hover:text-white dark:bg-neutral-700 dark:text-neutral-300
      ">
        Hello world
      </button>
    </div>
  )
}
