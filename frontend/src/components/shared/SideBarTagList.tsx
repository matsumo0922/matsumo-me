import {FC} from "react";
import {sideBarTagListStyles} from "@/components/shared/SideBarTagList.css";
import Link from "next/link";

type Props = { tags: string[] };

export const SideBarTagList: FC<Props> = ({tags}) => {
    return (
        <div className={sideBarTagListStyles.content}>
            <p className={sideBarTagListStyles.header}>
                タグ一覧
            </p>

            <hr className={sideBarTagListStyles.contentDivider} />

            <ul className={sideBarTagListStyles.list}>
                {tags.map((tag, index) => (
                    <li
                        className={sideBarTagListStyles.item}
                        key={tag}>
                        <Link href={{pathname: "", query: `tag=${tag}`}}>
                            {tag}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
