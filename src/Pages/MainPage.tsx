import ImageInput from '../component/ImageInput';

export default function MainPage() {
  return (
    <section className="wrapper h-96 justify-evenly">
      <div className=" text-center">
        <h1 className="text-lg md:text-2xl">인공지능 Personal Color 테스트</h1>
        <h2 className="text-sm md:text-lg">나의 Personal Color는 무엇일까?</h2>
      </div>
      {/* <div className="flex flex-col items-center">
        <input type="file" className="file-input file-input-bordered file-input-primary w-10/12 md:w-full max-w-xs mb-5" />
        <h3 className="text-gray-500 text-xs md:text-md">얼굴 사진을 올려놓거나 눌러서 업로드하세요!</h3>
      </div> */}
      <ImageInput />
    </section>
  );
}
