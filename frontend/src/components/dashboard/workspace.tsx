export default function Workspace() {
    return (
        <div className="col-span-4 px-10 pt-10">
            <h1 className="text-3xl">Good Morning, <span className="font-semibold">Joe!</span></h1>
            <br />
            <div id="kpis" className="grid grid-cols-3 text-center">
                <div className="p-2 m-2 rounded bg-gray-50">Introducing tags</div>
                <div className="p-2 m-2 rounded bg-gray-50">Introducing tags</div>
                <div className="p-2 m-2 rounded bg-gray-50">Access anywhere</div>
            </div>
        </div>
    );
}