"use client";
import { Span } from "next/dist/trace";
import React from "react";

const styles: Record<string, React.CSSProperties> = {
    item: { alignItems: "center", display: "inline-flex", gap: "inherit"},
    list: { alignItems: "center", display: "flex", gap:"inherit", listStyle: "none", wordWrap: "break-word"},
    separator: { alignItems: "center", display: "inline-flex"},
};

const BreadcrumContext = React.createContext({ separator: null as React.ReactNode});
const useBreadcrumbContext = () => {
    const context = React.useContext(BreadcrumContext);
    if (!context) throw new Error("BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator must be used within a Breadcrumb");
    return context;
};

const BreadcrumItemContext = React.createContext({ iscurrent: false, isLast: false});
const useBreadcrumbItemContext = () => {
    const context = React.useContext(BreadcrumItemContext);
    if (!context) throw new Error("BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator must be used within a Breadcrumb");
};

type BreadcrumbSeparatorProps = React.ComponentPropsWithoutRef<"span">;
function BreadcrumbSeparator(props: BreadcrumbSeparatorProps): JSX.Element | null {
    const { children, style, role = "presentation", ...resProps } = props;
    const { separator } = useBreadcrumbContext();
    const { isLast } = useBreadcrumbItemContext();

    if(!separator || isLast) return null;
    return(
        <span role={role} style={{ ...styles.separator, ...style }} {...resProps}>
            {children ?? separator}
        </span>
    );
}

type BreadcrumbLinkProps <T extends React.ElementType = "a"> = React.ComponentPropsWithoutRef<T> & {
    as?: T;
    href?: string;
};
function BreadcrumbLink <T extends React.ElementType = "a">(props: BreadcrumbLinkProps<T>): JSX.Element {
    const { as = "a", ...resProps } = props;
    const { iscurrent } = useBreadcrumbItemContext();
    
    const Component = iscurrent ? "span" : as;
    if (iscurrent) delete resProps.href;

    return <Component {...resProps} aria-current={iscurrent ? "page": undefined} />;
}

type BreadcrumbItemProps = React.ComponentPropsWithoutRef<"li"> & { isCurrentPage?: boolean };
function BreadcrumbItem(props: BreadcrumbItemProps): JSX.Element{
    const { isCurrentPage, style, children, ...resProps } = props;

    return (
        <li style={{ ...styles.item, ...style}} {...resProps}>
            {children}
            <BreadcrumbSeparator />
        </li>
    );
}

type BreadcrumbProps = React.ComponentPropsWithoutRef<"ol"> & {separator?: React.ReactNode};
function Breadcrumb(props: BreadcrumbProps): JSX.Element {
    const {separator, children, ...resProps} = props;
    const count = React.Children.count(children);

    return (
        <BreadcrumContext.Provider value={{ separator }}>
            <nav aria-label="Breadcrumb" {...resProps}>
                <ol style={styles.list}>
                    {React.Children.map(children, (child, index) => {
                        const isCurrent = React.isValidElement(child) && (child.props.isCurrentPage ?? false);
                        const count = React.Children.count(children);

                        return (
                            <BreadcrumContext.Provider value={ { isCurrent, isLast }} key={index}>
                                {child}
                            </BreadcrumContext.Provider>
                        );
                    })}
                </ol>
            </nav>
        </BreadcrumContext.Provider>
    );
}

export type {BreadcrumbProps , BreadcrumbItemProps , BreadcrumbLinkProps , BreadcrumbSeparatorProps};
export { Breadcrumb , BreadcrumbItem , BreadcrumbLink , BreadcrumbSeparator};