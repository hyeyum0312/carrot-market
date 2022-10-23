import type { NextPage } from "next";
const Chats: NextPage = () => {
    return (
        <div className="py-10 divide-y-2">
            {[1, 2, 3, 4, 5, 6, 7].map((_, i) => (
                <div className="flex py-3 px-4 items-center space-x-3 " key={i}>
                    <div className="w-12 h-12 rounded-full bg-slate-300"></div>
                    <div>
                        <p className="text-sm font-medium text-gray-700">Steve Jebs</p>
                        <p className="text-sm text-gray-500">See you tomorrow in the corner at 2pm!</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Chats