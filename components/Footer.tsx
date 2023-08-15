/*
 * :file description: 
 * :name: /youjia/components/Footer.tsx
 * :author: 张德志
 * :copyright: (c) 2023, Tungee
 * :date created: 2023-08-15 12:36:38
 * :last editor: 张德志
 * :date last edited: 2023-08-15 22:05:20
 */

export default function Footer() {
  return (
    <footer style={{textAlign:'center',padding:'10px 0px'}} className="text-center h-16 sm:h-20 w-full sm:pt-2 pt-4 border-t   border-gray-500">
      <div  className="text-gray-300">
     
        <a
          href="https://replicate.com/"
          target="_blank"
          rel="noreferrer"
          style={{textAlign:'center'}}
          className="hover:underline transition hover:text-gray-200"
        >
         CopyRight@2019-2023 晓智科技 黔ICP备20000421号-2
        </a>
       
      </div>
    </footer>
  );
}
