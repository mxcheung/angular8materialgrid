
    public onRemoveItem(item: GlobalItem, itemArray: GlobalItem[]): void {
        const key: string = Object.keys(item).find((itemKey: string) => itemKey !== 'bccentity');
        itemArray.splice(
            itemArray.findIndex(
                (arrayItem: GlobalItem) => {
                    item.bccentity === arrayItem.bccentity && item[key] === arrayItem[key]
                }),
            1);
    }
