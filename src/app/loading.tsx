const Loading = () => {
    return (
        <div className="bg-white text-black flex flex-col justify-center items-center h-screen gap-6">
            <div className="relative w-16 h-16">
                <div className="absolute inset-0 rounded-full border-4 border-gray-200" />
                <div className="absolute inset-0 rounded-full border-4 border-t-black animate-spin" />
            </div>
            <p className="text-gray-500 text-sm tracking-widest uppercase animate-pulse">
                Yuklanmoqda...
            </p>
        </div>
    )
}

export default Loading