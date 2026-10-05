export const projects = [
  { 
    id: 1, 
    title: 'Giám sát môi trường IoT', 
    desc: 'Hệ thống đo nhiệt độ, độ ẩm dùng ESP32 và cảm biến DHT11. Dữ liệu được gửi lên server qua MQTT.',
    tags: ['iot', 'web', 'esp32'] 
  },
  { 
    id: 2, 
    title: 'Điều khiển động cơ STM32', 
    desc: 'Thiết kế board mạch và lập trình C++ cho vi điều khiển STM32F103C8T6 để điều khiển động cơ bước chính xác.',
    tags: ['embedded', 'c++', 'stm32'] 
  },
  { 
    id: 3, 
    title: 'Thiết kế mạch Proteus', 
    desc: 'Mô phỏng và vẽ mạch PCB cho hệ thống đèn giao thông tự động, đo lường các thông số dòng điện, điện áp.',
    tags: ['hardware', 'simulation', 'proteus'] 
  },
  { 
    id: 4, 
    title: 'Ứng dụng quản lý To-Do', 
    desc: 'Web app đơn giản giúp ghi chú công việc hàng ngày, sử dụng HTML, CSS, JavaScript thuần và localStorage.',
    tags: ['web', 'js', 'html-css'] 
  },
  { 
    id: 5, 
    title: 'Giao tiếp cảm biến siêu âm', 
    desc: 'Ứng dụng module siêu âm HC-SR04 đo khoảng cách vật cản, hiển thị lên màn hình LCD 16x2.',
    tags: ['embedded', 'sensor', 'arduino'] 
  },
  { 
    id: 6, 
    title: 'Thu thập dữ liệu cảm biến', 
    desc: 'Giao tiếp thiết bị đo lường qua cổng Serial, vẽ biểu đồ thời gian thực (Real-time chart) bằng Python.',
    tags: ['python', 'data', 'hardware'] 
  }
];