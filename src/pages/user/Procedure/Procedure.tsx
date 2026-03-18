import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaCheckCircle, FaFileAlt, FaLightbulb, FaRocket, FaUsers } from 'react-icons/fa'
import path from 'src/constants/path'

const procedureSteps = [
    {
        icon: <FaLightbulb className='text-orange-500 text-xl' />,
        title: 'Tiếp nhận nhu cầu',
        description:
            'Đội ngũ tư vấn trao đổi mục tiêu kinh doanh, phân tích nhóm khách hàng mục tiêu và xác định yêu cầu cốt lõi của MiniApp.'
    },
    {
        icon: <FaFileAlt className='text-orange-500 text-xl' />,
        title: 'Lập giải pháp và kế hoạch',
        description:
            'Chúng tôi đề xuất cấu trúc tính năng, luồng người dùng, công nghệ phù hợp và timeline triển khai rõ ràng theo từng giai đoạn.'
    },
    {
        icon: <FaUsers className='text-orange-500 text-xl' />,
        title: 'Thiết kế và phát triển',
        description:
            'Tiến hành UX/UI, phát triển hệ thống và tích hợp API. Mỗi sprint đều có cập nhật tiến độ để đảm bảo minh bạch.'
    },
    {
        icon: <FaCheckCircle className='text-orange-500 text-xl' />,
        title: 'Kiểm thử và tối ưu',
        description:
            'Kiểm thử tính năng, hiệu năng và bảo mật, sau đó điều chỉnh để mang đến trải nghiệm mượt mà trước khi bàn giao.'
    },
    {
        icon: <FaRocket className='text-orange-500 text-xl' />,
        title: 'Bàn giao và đồng hành',
        description:
            'Bàn giao tài liệu hướng dẫn, đào tạo vận hành và tiếp tục hỗ trợ trong quá trình sử dụng để MiniApp phát huy hiệu quả cao nhất.'
    }
]

export default function Procedure() {
    return (
        <div className='bg-gradient-to-b from-orange-50 via-white to-amber-50 text-gray-800'>
            <Helmet>
                <title>MiniApp Web | Quy trình triển khai</title>
                <meta
                    name='description'
                    content='Quy trình triển khai MiniApp tại SOD Solution từ bước tư vấn, thiết kế, phát triển đến bàn giao và đồng hành.'
                />
            </Helmet>

            <section className='max-w-6xl mx-auto px-4 md:px-6 pt-16 pb-10 text-center'>
                <motion.h1
                    className='text-3xl md:text-5xl font-bold text-orange-600 leading-tight'
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Quy trình triển khai MiniApp
                </motion.h1>
                <motion.p
                    className='mt-5 text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed'
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    Từ ý tưởng đến sản phẩm hoàn chỉnh, chúng tôi xây dựng quy trình rõ ràng, dễ theo dõi và tối ưu theo đúng mục
                    tiêu kinh doanh của bạn.
                </motion.p>
            </section>

            <section className='max-w-6xl mx-auto px-4 md:px-6 pb-16'>
                <div className='relative'>
                    <div className='hidden md:block absolute left-7 top-4 bottom-4 w-[2px] bg-orange-200' />

                    <div className='space-y-6'>
                        {procedureSteps.map((step, index) => (
                            <motion.article
                                key={step.title}
                                className='relative bg-white rounded-2xl border border-orange-100 shadow-sm p-5 md:p-7 md:ml-16'
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.45, delay: index * 0.08 }}
                            >
                                <div className='hidden md:flex absolute -left-16 top-7 w-8 h-8 rounded-full bg-white border-2 border-orange-400 items-center justify-center text-sm font-bold text-orange-500'>
                                    {index + 1}
                                </div>

                                <div className='flex items-start gap-4'>
                                    <div className='w-10 h-10 min-w-10 rounded-full bg-orange-50 flex items-center justify-center'>{step.icon}</div>
                                    <div>
                                        <h2 className='text-lg md:text-xl font-bold text-gray-900'>{step.title}</h2>
                                        <p className='mt-2 text-sm md:text-base text-gray-700 leading-relaxed'>{step.description}</p>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            <section className='max-w-6xl mx-auto px-4 md:px-6 pb-20'>
                <motion.div
                    className='rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 text-white p-7 md:p-10 shadow-lg'
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45 }}
                >
                    <h3 className='text-2xl md:text-3xl font-bold'>Sẵn sàng bắt đầu dự án của bạn?</h3>
                    <p className='mt-3 text-orange-50 max-w-3xl'>
                        Đăng ký để nhận tư vấn miễn phí và đề xuất giải pháp MiniApp phù hợp với mô hình kinh doanh của doanh nghiệp.
                    </p>
                    <Link
                        to={path.register}
                        className='mt-6 inline-flex items-center gap-2 bg-white text-orange-600 font-semibold px-6 py-3 rounded-full hover:bg-orange-50 transition-colors'
                    >
                        Đăng ký tư vấn <FaArrowRight className='text-sm' />
                    </Link>
                </motion.div>
            </section>
        </div>
    )
}
