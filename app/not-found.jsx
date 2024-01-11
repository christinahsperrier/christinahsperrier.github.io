import Link from "next/link";

export default function NotFound(){
    return <>
        <h1 className="display-2 mt-2">404: Page not found</h1>
        <p>
            Sorry, it looks like that page doesn't exist. Return to <Link href="/">Homepage</Link>.
        </p>
    </>
}