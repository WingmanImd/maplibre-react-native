//
//  FilterParser.m
//  RCTMLN
//
//  Created by Nick Italiano on 10/3/17.
//  Copyright © 2017 Mapbox Inc. All rights reserved.
//

#import "FilterParser.h"
#import <MapLibre/MapLibre.h>

@implementation FilterParser

+ (NSPredicate*)parse:(NSArray *)filterList
{
    if (filterList == nil || filterList.count < 1) {
        return nil;
    }
    return [NSPredicate predicateWithMLNJSONObject:filterList];
}

@end
