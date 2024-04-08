import React from 'react'
import { FaSearch } from 'react-icons/fa'
import data from './data.js'

const IdContent = () => {
    // const itemKH = data.find((item) => item.id === item.Id);
    return (
        <div className='w-full h-auto items-center bg-gray-100 py-20'>
            <div className='flex flex-col h-auto items-center py-3'>
                <p className='text-2xl font-semibold text-gray-700 flex items-center'>
                    Nền tảng Quản trị và Kinh doanh Du lịch 4.0
                </p>
                <p className='text-md font-semibold text-gray-700'>
                    Hệ sinh thái quản trị chuyên nghiệp, đầy đủ cho ngành Du lịch Việt Nam
                </p>
                <div className='h-auto flex flex-row justify-between items-center bg-white border
                rounded py-2 px-3 w-[30%] text-gray-700 leading-tight
                focus:outline-none focus:shadow-outline my-5'>
                    <input
                        className="w-full appearance-none rounded text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="example-input"
                        type="text"
                        placeholder="Nhập tên ứng dụng bạn muốn tìm kiếm"
                    />
                    <FaSearch size={14} className='text-gray-500 m-1' />
                </div>
            </div>
            <div className='flex flex-col h-auto items-center'>

                {/* San pham tieu bieu */}
                <div className="container mx-auto w-[55%] pb-6">
                    <h1 className="text-lg text-gray-700 font-semibold mb-8">Sản phẩm tiêu biểu</h1>
                    <div className="grid grid-cols-6 gap-4">
                        {data.slice(0, 4).map((item) => (
                            <div key={item.id} className="bg-white p-4 flex flex-col items-center rounded-lg shadow-xl">
                                <img src={item.iconUrl} alt={item.name} />
                                <p className='text-sm text-gray-700'>{item.name}&trade;</p>
                                <p className='text-xs text-gray-700 text-center'>{item.description}</p>
                            </div>
                        ))}
                        {data.slice(4, 6).map((item) => (
                            <div key={item.id} className="bg-white p-4 flex flex-col items-center rounded-lg shadow-xl">
                                <img src={item.iconUrl} alt={item.name} />
                                <p className='text-sm text-gray-700'>{item.name}</p>
                                <p className='text-xs text-gray-700 text-center'>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Van hanh */}
                <div className="container mx-auto w-[55%]  pb-6">
                    <h1 className="text-lg text-gray-700 font-semibold mb-8">Vận hành</h1>
                    <div className="grid grid-cols-6 gap-4">
                        {data.slice(0, 4).map((item) => (
                            <div key={item.id} className="bg-white p-4 flex flex-col items-center rounded-lg shadow-xl">
                                <img src={item.iconUrl} alt={item.name} />
                                <p className='text-sm text-gray-700'>{item.name}&trade;</p>
                                <p className='text-xs text-gray-700 text-center'>{item.description}</p>
                            </div>
                        ))}
                        {data.slice(6, 14).map((item) => (
                            <div key={item.id} className="bg-white p-4 flex flex-col items-center rounded-lg shadow-xl">
                                <img src={item.iconUrl} alt={item.name} />
                                <p className='text-sm text-gray-700'>{item.name}</p>
                                <p className='text-xs text-gray-700 text-center'>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Phan phoi va doanh thu */}
                <div className="container mx-auto w-[55%]  pb-6">
                    <h1 className="text-lg text-gray-700 font-semibold mb-8">Phân phối và doanh thu</h1>
                    <div className="grid grid-cols-6 gap-4">
                        {data.slice(0, 9).map((item) => (
                            <div key={item.id} className="bg-white p-4 flex flex-col items-center rounded-lg shadow-xl">
                                <img src={item.iconUrl} alt={item.name} />
                                <p className='text-sm text-gray-700'>{item.name}</p>
                                <p className='text-sm text-gray-700 text-center'>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tiep thi ban hang */}
                <div className="container mx-auto w-[55%]  pb-6">
                    <h1 className="text-lg text-gray-700 font-semibold mb-8">Tiếp thị bán hàng</h1>
                    <div className="grid grid-cols-6 gap-4">
                        {data.slice(0, 6).map((item) => (
                            <div key={item.id} className="bg-white p-4 flex flex-col items-center rounded-lg shadow-xl">
                                <img src={item.iconUrl} alt={item.name} />
                                <p className='text-sm text-gray-700'>{item.name}</p>
                                <p className='text-sm text-gray-700 text-center'>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Trai nghiem khach hang */}
                <div className="container mx-auto w-[55%]  pb-6">
                    <h1 className="text-lg text-gray-700 font-semibold mb-8">Trải nghiệm khách hàng</h1>
                    <div className="grid grid-cols-6 gap-4">
                        {data.slice(14,15).map((item) => (
                            <div key={item.id} className="bg-white p-4 flex flex-col items-center rounded-lg shadow-xl">
                                <img src={item.iconUrl} alt={item.name} />
                                <p className='text-sm text-gray-700'>{item.name}</p>
                                <p className='text-sm text-gray-700 text-center'>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>



        </div>
    )
}

export default IdContent